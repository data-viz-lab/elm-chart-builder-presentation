module BarStacked exposing (view)

import Axis
import Chart.Bar as Bar
import CodePrev
import Color exposing (Color, rgb255)
import Data
import Helpers
import Html exposing (Html)
import Html.Attributes as Attributes
import Numeral
import Scale.Color


colorScheme : List Color
colorScheme =
    Scale.Color.tableau10


accessor : Bar.Accessor Data.UrbanVsRural
accessor =
    Bar.Accessor (.year >> Just) .classification .population


valueFormatter : Float -> String
valueFormatter =
    Numeral.format "0a"


yAxis : Bar.YAxis Float
yAxis =
    Bar.axisLeft
        [ Axis.tickSizeOuter 0
        , Axis.tickCount 3
        , Axis.tickFormat (valueFormatter << abs)
        ]


years : List String
years =
    [ "1950", "1960", "1970", "1980", "1990", "2000", "2010", "2020" ]


xAxisTickFormat : String -> String
xAxisTickFormat s =
    if List.member s years then
        s

    else
        ""


xAxis : Bar.XAxis String
xAxis =
    Bar.axisBottom
        [ Axis.tickSizeOuter 0
        , Axis.tickSizeInner 0
        , Axis.tickFormat xAxisTickFormat
        ]


verticalGrouped : Int -> Html msg
verticalGrouped width =
    Bar.init
        { margin = Helpers.margin
        , width = Helpers.toChartWidth width
        , height =
            width
                |> Helpers.toChartWidth
                |> Helpers.toChartHeight
        }
        |> Bar.withColorPalette colorScheme
        |> Bar.withBarStyle [ ( "stroke", "#fff" ), ( "stroke-width", "0.5" ) ]
        |> Bar.withColumnTitle
            (Bar.yColumnTitle valueFormatter)
        |> Bar.withGroupedLayout
        |> Bar.withYAxis yAxis
        |> Bar.withXAxis xAxis
        |> Bar.withStackedLayout Bar.diverging
        |> Bar.render ( Data.countriesUrbanVsRuralFiveYears, accessor )


desc : Html msg
desc =
    Html.section [ Attributes.class "example__desc" ]
        [ Html.h3 [] [ Html.text "Stacked vertical bar chart" ]
        , Html.p [] [ Html.text "TODO" ]
        , Html.a [ Attributes.href "https://github.com/data-viz-lab/homepage/blob/main/src/BarStacked.elm" ]
            [ Html.text "source" ]
        ]


view : { a | width : Int } -> List (Html msg)
view { width } =
    [ desc
    , verticalGrouped width
    , CodePrev.codePrev CodePrev.codePrevBarStacked
    ]
