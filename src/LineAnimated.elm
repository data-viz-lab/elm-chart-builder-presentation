module LineAnimated exposing
    ( Model
    , Msg(..)
    , initialModel
    , subscriptions
    , update
    , view
    )

{-| This module shows how to build an animated line chart
-}

import Array exposing (Array)
import Axis
import Browser
import Browser.Events
import Chart.Bar as Bar
import Chart.Line as Line
import City exposing (City)
import CodePrev
import Color
import Csv.Decode as Decode exposing (Decoder)
import Helpers
import Html exposing (Html)
import Html.Attributes as Attributes
import Html.Events as Events
import Interpolation exposing (Interpolator)
import Process
import Scale.Color
import Set exposing (Set)
import Shape
import Task
import Transition exposing (Transition)



-- MODEL


type alias Data =
    List City


type alias Frame =
    -- List (x, y)
    List ( Float, Float )


type alias Model =
    { transition : Transition Data
    , currentIdx : Int
    , currentYear : Float
    , animationIsComplete : Bool

    --data up to prev transition
    , data : Data
    , allData : Data
    , years : Array Float
    , lastIdx : Int
    , yDomain : ( Float, Float )
    , xDomain : ( Float, Float )
    }



-- UPDATE


type Msg
    = Tick Int
    | StartAnimation
    | InitAnimation
    | OnData (Result Decode.Error (List City))


transitionSpeed =
    250


transitionStep =
    transitionSpeed + 350


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Tick tick ->
            let
                newData =
                    model.data ++ Transition.value model.transition
            in
            ( { model
                | transition = Transition.step tick model.transition
                , data = newData
              }
            , Cmd.none
            )

        StartAnimation ->
            let
                nextIdx =
                    model.currentIdx
                        + 1

                nextYear =
                    model.years
                        |> Array.get nextIdx
                        |> Maybe.withDefault model.currentYear

                from =
                    model.allData
                        |> List.filter (\s -> s.year == model.currentYear)

                to =
                    model.allData
                        |> List.filter (\s -> s.year == nextYear)

                transition =
                    Transition.easeFor transitionSpeed Transition.easeLinear (interpolateValues from to)

                isComplete =
                    if nextIdx <= model.lastIdx then
                        False

                    else
                        True
            in
            ( { model
                | transition = transition
                , currentYear = nextYear
                , currentIdx = nextIdx
                , animationIsComplete = isComplete
                , data =
                    model.allData
                        |> List.filter (\s -> s.year <= model.currentYear)
              }
            , if nextIdx <= model.lastIdx then
                Process.sleep transitionStep
                    |> Task.andThen (\_ -> Task.succeed StartAnimation)
                    |> Task.perform identity

              else
                Cmd.none
            )

        InitAnimation ->
            let
                m =
                    { initialModel
                        | allData = model.allData
                        , years = model.years
                        , lastIdx = model.lastIdx
                        , yDomain = model.yDomain
                        , xDomain = model.xDomain
                    }
            in
            ( m
            , Task.perform identity (Task.succeed StartAnimation)
            )

        OnData (Ok data) ->
            let
                selectedData =
                    data
                        |> List.filter
                            (\d ->
                                --d.urbanAgglomeration
                                --    == "Buenos Aires"
                                --    || d.urbanAgglomeration
                                --    == "New York"
                                --    || d.urbanAgglomeration
                                --    == "London"
                                d.urbanAgglomeration
                                    == "Tokyo"
                                    || d.urbanAgglomeration
                                    == "Shanghai"
                            )
            in
            ( { model
                | allData = selectedData
                , lastIdx = lastIdx selectedData
                , yDomain = yDomain selectedData
                , xDomain = xDomain selectedData
                , years = years selectedData
              }
            , Task.perform identity (Task.succeed StartAnimation)
            )

        OnData (Err err) ->
            ( model, Cmd.none )


interpolateValues : Data -> Data -> Interpolator Data
interpolateValues from to =
    List.map2
        (\from_ to_ ->
            interpolateValue ( from_.year, from_.populationMillions ) ( to_.year, to_.populationMillions )
                |> Interpolation.map
                    (\( year, populationMillions ) ->
                        { year = year
                        , populationMillions = populationMillions
                        , urbanAgglomeration = from_.urbanAgglomeration
                        }
                    )
        )
        from
        to
        |> Interpolation.inParallel


interpolateValue : ( Float, Float ) -> ( Float, Float ) -> Interpolator ( Float, Float )
interpolateValue from to =
    interpolatePosition from to


interpolatePosition : ( Float, Float ) -> ( Float, Float ) -> Interpolator ( Float, Float )
interpolatePosition =
    Interpolation.tuple Interpolation.float Interpolation.float



-- CHART CONFIGURATION


accessor : Line.Accessor City
accessor =
    Line.cont
        { xGroup = .urbanAgglomeration >> Just
        , xValue = .year
        , yValue = .populationMillions
        }


sharedAttributes : List (Axis.Attribute value)
sharedAttributes =
    [ Axis.tickSizeOuter 0
    , Axis.tickSizeInner 3
    ]


yAxis : Bar.YAxis Float
yAxis =
    Line.axisLeft
        [ Axis.tickCount 6
        , Axis.tickSizeOuter 0
        , Axis.tickSizeInner 3
        ]


xAxisTicks : List Float
xAxisTicks =
    [ 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020, 2030 ]


xAxis : Line.XAxis Float
xAxis =
    Line.axisBottom
        [ Axis.ticks xAxisTicks
        , Axis.tickFormat (round >> String.fromInt)
        , Axis.tickSizeOuter 0
        ]


chart : Int -> Model -> Html msg
chart width model =
    Line.init
        { margin = Helpers.marginWithLabel
        , width = Helpers.toChartWidth width
        , height =
            width
                |> Helpers.toChartWidth
                |> Helpers.toChartHeight
        }
        |> Line.withColorPalette Scale.Color.tableau10
        |> Line.withLineStyle [ ( "stroke-width", "3" ) ]
        |> Line.withXAxisCont xAxis
        --|> Line.withCurve (Shape.cardinalCurve 0.6)
        |> Line.withYAxis yAxis
        |> Line.withLabels Line.xGroupLabel
        |> Line.withXContDomain model.xDomain
        |> Line.withYDomain model.yDomain
        -- for performance
        |> Line.withoutTable
        |> Line.render ( model.data, accessor )



-- VIEW


desc : Model -> Html Msg
desc model =
    Html.section [ Attributes.class "example__desc" ]
        [ Html.h3 [] [ Html.text "Continuous animated line chart with labels" ]
        , Html.p [] [ Html.text "Population in millions" ]
        , Html.p []
            [ Html.button
                [ Events.onClick InitAnimation
                , Attributes.disabled (not <| model.animationIsComplete)
                ]
                [ Html.text "Start animation" ]
            ]
        , Html.a [ Attributes.href "https://github.com/data-viz-lab/elm-chart-builder-presentation/blob/main/src/LineAnimated.elm" ]
            [ Html.text "source" ]
        ]


yearView : Float -> Html Msg
yearView year =
    Html.h2 [ Attributes.class "year-view" ] [ Html.text (String.fromFloat year) ]


view : { a | width : Int } -> Model -> List (Html Msg)
view { width } model =
    [ desc model
    , Html.div [ Attributes.class "chart-wrapper" ] [ yearView model.currentYear, chart width model ]
    , CodePrev.codePrev CodePrev.codePrevLineAnimated
    ]



-- INIT


years : Data -> Array Float
years data =
    data
        |> List.map .year
        |> Set.fromList
        |> Set.toList
        |> Array.fromList


lastIdx : Data -> Int
lastIdx data =
    years data
        |> (\t -> Array.length t - 1)


yDomain : Data -> ( Float, Float )
yDomain data =
    data
        |> List.map .populationMillions
        |> (\p -> ( 0, List.maximum p |> Maybe.withDefault 0 ))


xDomain : Data -> ( Float, Float )
xDomain data =
    data
        |> List.map .year
        |> (\p -> ( List.minimum p |> Maybe.withDefault 0, List.maximum p |> Maybe.withDefault 0 ))


initialYear : Float
initialYear =
    1950


initialModel : Model
initialModel =
    { transition = Transition.constant <| []
    , currentYear = initialYear
    , currentIdx = 0
    , animationIsComplete = True
    , data = []
    , allData = []
    , years = Array.empty
    , lastIdx = 0
    , yDomain = ( 0, 0 )
    , xDomain = ( 0, 0 )
    }



-- SUSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    if Transition.isComplete model.transition then
        Sub.none

    else
        Browser.Events.onAnimationFrameDelta (round >> Tick)



--Sub.none
