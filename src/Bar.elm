module Bar exposing (view)

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


accessor : Bar.Accessor Data.GroupData
accessor =
    Bar.Accessor (.groupLabel >> Just) .x .y


valueFormatter : Float -> String
valueFormatter =
    Numeral.format "0a"


yAxis : Bar.YAxis Float
yAxis =
    Bar.axisLeft
        [ Axis.tickCount 3
        , Axis.tickFormat valueFormatter
        ]


xAxis : Bar.XAxis String
xAxis =
    Bar.axisBottom
        [ Axis.tickSizeOuter 0
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
        |> Bar.withColumnTitle
            (Bar.yColumnTitle valueFormatter)
        |> Bar.withGroupedLayout
        |> Bar.withYAxis yAxis
        |> Bar.withXAxis xAxis
        |> Bar.render ( Data.groupData, accessor )


desc : Html msg
desc =
    Html.section [ Attributes.class "example__desc" ]
        [ Html.h3 [] [ Html.text "Grouped vertical bar chart" ]
        , Html.p [] [ Html.text "TODO" ]
        , Html.a [ Attributes.href "https://github.com/data-viz-lab/homepage/blob/main/src/Bar.elm" ]
            [ Html.text "source code" ]
        ]


view : { a | width : Int } -> List (Html msg)
view { width } =
    [ desc
    , verticalGrouped width
    , CodePrev.codePrev CodePrev.codePrevBar
    ]
