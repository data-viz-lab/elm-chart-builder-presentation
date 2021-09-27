module Line exposing
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
import CodePrev
import Color exposing (Color, rgb255)
import Data
import Helpers
import Html exposing (Html)
import Html.Attributes as Attributes
import Numeral
import Scale.Color
import Set



-- MODEL


type alias Model =
    { hinted : Maybe ( Float, Float )
    , pointAnnotation : Maybe Annotation.Hint
    , vLineAnnotation : Maybe Annotation.Hint
    }



-- UPDATE


type Msg
    = Hint (Maybe Line.Hint)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Hint response ->
            ( { model
                | pointAnnotation =
                    response
                        |> Maybe.map (\hint -> ( hint, pointAnnotationStyle ))
                , vLineAnnotation =
                    response
                        |> Maybe.map (\hint -> ( hint, vLineAnnotationStyle ))
              }
            , Cmd.none
            )


pointAnnotationStyle : List ( String, String )
pointAnnotationStyle =
    [ ( "fill", "#fff" )
    , ( "stroke", "#000" )
    , ( "stroke-width", "1.5" )
    ]


vLineAnnotationStyle : List ( String, String )
vLineAnnotationStyle =
    [ ( "stroke", "#999999" )
    ]


colorScheme : List Color
colorScheme =
    Scale.Color.tableau10


circle : Symbol
circle =
    Symbol.circle
        |> Symbol.withStyle [ ( "stroke", "white" ) ]
        |> Symbol.withSize 8


accessor : Line.Accessor Data.CityTimeline
accessor =
    Line.cont
        { xGroup = .name >> Just
        , xValue = .year
        , yValue = .population
        }


valueFormatter : Float -> String
valueFormatter =
    Numeral.format "0a"


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
    [ 1950, 1960, 1970, 1980, 1990, 2000 ]


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
            |> Line.withColorPalette colorScheme
            |> Line.withEvent (Line.hoverAll Hint)
            |> Line.withPointAnnotation model.pointAnnotation
            |> Line.withVLineAnnotation model.vLineAnnotation
            |> Line.withLabels Line.xGroupLabel
            |> Line.withSymbols [ circle ]
            |> Line.withLineStyle [ ( "stroke-width", "2.5" ) ]
            |> Line.withYAxis yAxis
            |> Line.withXAxisCont xAxis
            |> Line.render ( Data.citiesTimeline, accessor )
        , tooltip width model
        ]


desc : Html msg
desc =
    Html.section [ Attributes.class "example__desc" ]
        [ Html.h3 [] [ Html.text "Continuous line chart with dots, labels and tooltip" ]
        , Html.p [] [ Html.text "Population in millions" ]
        , Html.a [ Attributes.href "https://github.com/data-viz-lab/homepage/blob/main/src/Line.elm" ]
            [ Html.text "source" ]
        ]


view : { a | width : Int } -> Model -> List (Html Msg)
view { width } model =
    [ desc
    , chart width model
    , CodePrev.codePrev CodePrev.codePrevLine
    ]


tooltip : Int -> Model -> Html Msg
tooltip width model =
    let
        margin =
            Helpers.marginWithLabel

        height =
            width
                |> Helpers.toChartWidth
                |> Helpers.toChartHeight

        xOffset =
            margin.left + 20

        annotation =
            model.pointAnnotation

        bottom =
            annotation
                |> Maybe.map Tuple.first
                |> Maybe.map
                    (\{ yPosition } -> String.fromFloat (height - yPosition) ++ "px")
                |> Maybe.withDefault ""

        left =
            annotation
                |> Maybe.map Tuple.first
                |> Maybe.map
                    (\{ xPosition } -> String.fromFloat (xPosition + xOffset) ++ "px")
                |> Maybe.withDefault ""

        display =
            annotation
                |> Maybe.map (always "block")
                |> Maybe.withDefault "none"

        year =
            annotation
                |> Maybe.map
                    (Tuple.first
                        >> .selection
                        >> .x
                        >> String.fromFloat
                    )
                |> Maybe.withDefault ""

        values =
            annotation
                |> Maybe.map
                    (Tuple.first
                        >> .selection
                        >> .y
                    )
                |> Maybe.withDefault []
                |> List.map
                    (\{ groupLabel, value } ->
                        Html.div []
                            [ Html.text
                                (Maybe.withDefault "" groupLabel
                                    ++ ": "
                                    ++ String.fromFloat value
                                )
                            ]
                    )
    in
    Html.div
        [ Attributes.style "margin" "0"
        , Attributes.style "padding" "5px"
        , Attributes.style "font-size" "14px"
        , Attributes.style "border" "1px #aaa solid"
        , Attributes.style "position" "absolute"
        , Attributes.style "bottom" bottom
        , Attributes.style "left" left
        , Attributes.style "background" "white"
        , Attributes.style "opacity" "90%"
        , Attributes.style "width" "130px"
        , Attributes.style "display" display
        ]
        [ Html.ul []
            (Html.li [] [ Html.text year ]
                :: values
            )
        ]


initialModel : Model
initialModel =
    { hinted = Nothing
    , pointAnnotation = Nothing
    , vLineAnnotation = Nothing
    }
