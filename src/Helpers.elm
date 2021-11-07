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

        factor =
            if pageWidth < 1400 then
                Debug.log "factor" 0.5

            else
                0.333
    in
    width
        |> toFloat
        |> (*) factor


toChartHeight : Float -> Float
toChartHeight width =
    chartRatio
        |> (/) width
        |> round
        |> toFloat


margin : { top : Float, right : Float, left : Float, bottom : Float }
margin =
    { top = 10, right = 20, bottom = 20, left = 30 }


marginWithLabel : { top : Float, right : Float, left : Float, bottom : Float }
marginWithLabel =
    { top = 10, right = 80, bottom = 20, left = 30 }
