module Line exposing (view)

import Axis
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


verticalGrouped : Int -> Html msg
verticalGrouped width =
    Line.init
        { margin = Helpers.marginWithLabel
        , width = Helpers.toChartWidth width
        , height =
            width
                |> Helpers.toChartWidth
                |> Helpers.toChartHeight
        }
        |> Line.withColorPalette colorScheme
        |> Line.withLabels Line.xGroupLabel
        |> Line.withSymbols [ circle ]
        |> Line.withLineStyle [ ( "stroke-width", "2" ) ]
        |> Line.withYAxis yAxis
        |> Line.withXAxisCont xAxis
        |> Line.render ( Data.citiesTimeline, accessor )


desc : Html msg
desc =
    Html.section [ Attributes.class "example__desc" ]
        [ Html.h3 [] [ Html.text "Continuous line chart with dots and labels" ]
        , Html.p [] [ Html.text "Population in millions" ]
        , Html.a [ Attributes.href "https://github.com/data-viz-lab/homepage/blob/main/src/Line.elm" ]
            [ Html.text "source code" ]
        ]


view : { a | width : Int } -> List (Html msg)
view { width } =
    [ desc
    , verticalGrouped width
    , CodePrev.codePrev CodePrev.codePrevLine
    ]
