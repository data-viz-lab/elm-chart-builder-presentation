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

--import List.Extra

import Array exposing (Array)
import Axis
import Browser
import Browser.Events
import Chart.Bar as Bar
import Chart.Line as Line
import CodePrev
import Color
import Data
import Helpers
import Html exposing (Html)
import Html.Attributes as Attributes
import Html.Events as Events
import Interpolation exposing (Interpolator)
import Process
import Scale.Color
import Set exposing (Set)
import Task
import Transition exposing (Transition)



-- MODEL


type alias Data =
    List Data.CityTimeline


type alias Frame =
    -- List (x, y)
    List ( Float, Float )


type alias Model =
    { transition : Transition Data
    , currentIdx : Int
    , currentYear : Float

    --data up to prev transition
    , data : Data
    , allData : Data
    }



-- UPDATE


type Msg
    = Tick Int
    | StartAnimation


transitionSpeed =
    500


transitionStep =
    transitionSpeed


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
                    years
                        |> Array.get nextIdx
                        |> Maybe.withDefault 0

                from =
                    model.allData
                        |> List.filter (\s -> s.year == model.currentYear)

                to =
                    model.allData
                        |> List.filter (\s -> s.year == nextYear)

                transition =
                    Transition.easeFor transitionSpeed Transition.easeLinear (interpolateValues from to)
            in
            ( { model
                | transition = transition
                , currentYear = nextYear
                , currentIdx = nextIdx
                , data =
                    model.allData
                        |> List.filter (\s -> s.year <= model.currentYear)
              }
            , if nextIdx <= lastIdx then
                Process.sleep transitionStep
                    |> Task.andThen (\_ -> Task.succeed StartAnimation)
                    |> Task.perform identity

              else
                Cmd.none
            )


interpolateValues : Data -> Data -> Interpolator Data
interpolateValues from to =
    List.map2
        (\from_ to_ ->
            interpolateValue ( from_.year, from_.population ) ( to_.year, to_.population )
                |> Interpolation.map
                    (\( year, population ) ->
                        { year = year
                        , population = population
                        , name = from_.name
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


accessor : Line.Accessor Data.CityTimeline
accessor =
    Line.cont
        { xGroup = .name >> Just
        , xValue = .year
        , yValue = .population
        }


sharedAttributes : List (Axis.Attribute value)
sharedAttributes =
    [ Axis.tickSizeOuter 0
    , Axis.tickSizeInner 3
    ]


yAxis : Bar.YAxis Float
yAxis =
    Line.axisLeft
        [ Axis.tickCount 3
        , Axis.tickSizeOuter 0
        , Axis.tickSizeInner 3
        ]


xAxisTicks : List Float
xAxisTicks =
    [ 1950, 1960, 1970, 1980, 1990, 2000 ]


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
        |> Line.withLineStyle [ ( "stroke-width", "2.5" ) ]
        |> Line.withXAxisCont xAxis
        |> Line.withYAxis yAxis
        |> Line.withLabels Line.xGroupLabel
        |> Line.withXContDomain xDomain
        |> Line.withYDomain yDomain
        -- for performance
        |> Line.withoutTable
        |> Line.render ( model.data, accessor )



-- VIEW


desc : Html msg
desc =
    Html.section [ Attributes.class "example__desc" ]
        [ Html.h3 [] [ Html.text "Continuous animated line chart with labels" ]
        , Html.p [] [ Html.text "Population in millions" ]
        , Html.a [ Attributes.href "https://github.com/data-viz-lab/homepage/blob/main/src/LineAnimated.elm" ]
            [ Html.text "source code" ]
        ]


view : { a | width : Int } -> Model -> List (Html msg)
view { width } model =
    [ desc
    , chart width model
    , CodePrev.codePrev CodePrev.codePrevLineAnimated
    ]



-- INIT


years : Array Float
years =
    Data.citiesTimeline
        |> List.map .year
        |> Set.fromList
        |> Set.toList
        |> Array.fromList


lastIdx : Int
lastIdx =
    years
        |> (\t -> Array.length t - 1)


yDomain : ( Float, Float )
yDomain =
    Data.citiesTimeline
        |> List.map .population
        |> (\p -> ( 0, List.maximum p |> Maybe.withDefault 0 ))


xDomain : ( Float, Float )
xDomain =
    Data.citiesTimeline
        |> List.map .year
        |> (\p -> ( List.minimum p |> Maybe.withDefault 0, List.maximum p |> Maybe.withDefault 0 ))


initialModel : Model
initialModel =
    { transition = Transition.constant <| []
    , currentYear = 1950
    , currentIdx = 0
    , data =
        Data.citiesTimeline
            |> List.filter (.year >> (==) 1950)
    , allData = Data.citiesTimeline
    }



-- SUSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    if Transition.isComplete model.transition then
        Sub.none

    else
        Browser.Events.onAnimationFrameDelta (round >> Tick)



--Sub.none
