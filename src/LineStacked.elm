module LineStacked exposing
    ( Model
    , Msg(..)
    , initialModel
    , update
    , view
    )

import Axis
import Chart.Annotation as Annotation
import Chart.Line as Line
import Chart.Symbol as Symbol exposing (Symbol)
import City exposing (City)
import CodePrev
import Color exposing (Color, rgb255)
import Csv.Decode as Decode exposing (Decoder)
import Helpers
import Html exposing (Html)
import Html.Attributes as Attributes
import Numeral
import Scale.Color
import Set
import Shape



-- MODEL


type alias Model =
    { data : List City
    }



-- UPDATE


type Msg
    = OnData (Result Decode.Error (List City))


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        OnData (Ok data) ->
            let
                selectedData =
                    data
                        |> List.filter
                            (\d ->
                                d.urbanAgglomeration
                                    == "Tokyo"
                                    || d.urbanAgglomeration
                                    == "Shanghai"
                            )
            in
            ( { model | data = selectedData }, Cmd.none )

        OnData (Err err) ->
            ( model, Cmd.none )


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


yAxis : Line.YAxis Float
yAxis =
    Line.axisLeft (Axis.tickCount 4 :: sharedAttributes)


xAxisTicks : List Float
xAxisTicks =
    [ 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020, 2030 ]


xAxis : Line.XAxis Float
xAxis =
    Line.axisBottom
        ([ Axis.ticks xAxisTicks
         , Axis.tickFormat (round >> String.fromInt)
         ]
            ++ sharedAttributes
        )


chart : Int -> Model -> Html Msg
chart width model =
    Html.div [ Attributes.style "position" "relative" ]
        [ Line.init
            { margin = Helpers.marginWithLabel
            , width = Helpers.toChartWidth width
            , height =
                width
                    |> Helpers.toChartWidth
                    |> Helpers.toChartHeight
            }
            |> Line.withColorPalette Scale.Color.tableau10
            |> Line.withCurve Shape.naturalCurve
            |> Line.withStackedLayout Shape.stackOffsetNone
            |> Line.asArea
            |> Line.withLineStyle [ ( "opacity", "0.9" ) ]
            |> Line.withLabels Line.xGroupLabel
            |> Line.withYAxis yAxis
            |> Line.withXAxisCont xAxis
            |> Line.render ( model.data, accessor )

        -- FIXME
        --|> Line.withVLineAnnotation model.vLineAnnotation
        ]


desc : Html msg
desc =
    Html.section [ Attributes.class "example__desc" ]
        [ Html.h3 [] [ Html.text "Continuous stacked area line chart" ]
        , Html.p [] [ Html.text "Population in millions" ]
        , Html.a [ Attributes.href "https://github.com/data-viz-lab/elm-chart-builder-presentation/blob/main/src/Line.elm" ]
            [ Html.text "source" ]
        ]


view : { a | width : Int } -> Model -> List (Html Msg)
view { width } model =
    [ desc
    , chart width model
    , CodePrev.codePrev CodePrev.codePrevLine
    ]


initialModel : Model
initialModel =
    { data = []
    }
