module Helpers exposing
    ( chartRatio
    , exampleViewMoltiplier
    , margin
    , marginWithLabel
    , maxPageWidth
    , toChartHeight
    , toChartWidth
    )


chartRatio : Float
chartRatio =
    1.7


exampleViewMoltiplier : Float
exampleViewMoltiplier =
    1.4


maxPageWidth : Int
maxPageWidth =
    1800


toChartWidth : Int -> Float
toChartWidth pageWidth =
    let
        width =
            if pageWidth > maxPageWidth then
                maxPageWidth

            else
                pageWidth
    in
    width
        |> toFloat
        |> (*) 0.333


toChartHeight : Float -> Float
toChartHeight width =
    chartRatio
        |> (/) width
        |> round
        |> toFloat


margin : { top : Float, right : Float, left : Float, bottom : Float }
margin =
    { top = 10, right = 20, bottom = 20, left = 60 }


marginWithLabel : { top : Float, right : Float, left : Float, bottom : Float }
marginWithLabel =
    { top = 10, right = 90, bottom = 20, left = 60 }
