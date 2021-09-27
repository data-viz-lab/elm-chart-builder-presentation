module CodePrev exposing
    ( codePrev
    , codePrevBar
    , codePrevBarStacked
    , codePrevLine
    , codePrevLineAnimated
    )

import Html exposing (Html)
import Html.Attributes as Attributes


codePrev : String -> Html msg
codePrev content =
    Html.div [ Attributes.class "example__code-prev" ]
        [ Html.pre [ Attributes.class "terminal" ]
            [ Html.code [ Attributes.class "language-elm" ]
                [ Html.text content ]
            ]
        ]


codePrevLineAnimated : String
codePrevLineAnimated =
    """ 
type alias CityTimeline =
    { name : String
    , population : Float
    , year : Float
    }

accessor : Line.Accessor Data.ContinuousData
accessor =
    Line.cont
        { xGroup = .name >> Just
        , xValue = .year
        , yValue = .population
        }

verticalGrouped : Int -> Html msg
verticalGrouped width =
    Line.init
        { margin = margin
        , width = width
        , height = height
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
        """


codePrevLine : String
codePrevLine =
    """ 
type alias CityTimeline =
    { name : String
    , population : Float
    , year : Float
    }

accessor : Line.Accessor Data.ContinuousData
accessor =
    Line.cont
        { xGroup = .name >> Just
        , xValue = .year
        , yValue = .population
        }

verticalGrouped : Int -> Html msg
verticalGrouped width =
    Line.init
        { margin = margin
        , width = width
        , height = height
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
        """


codePrevBarStacked : String
codePrevBarStacked =
    """ 
type alias UrbanVsRural =
    { year : String
    , population : Float
    , classification : String
    }

accessor : Bar.Accessor Data.UrbanVsRural
accessor =
    Bar.Accessor (.year >> Just) .classification .population

verticalGrouped : Int -> Html msg
verticalGrouped width =
    Bar.init
        { margin = margin
        , width = width
        , height = height
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
        """


codePrevBar : String
codePrevBar =
    """ 
type alias GroupData =
    { x : String
    , y : Float
    , groupLabel : String
    }

accessor : Bar.Accessor Data.GroupData
accessor =
    Bar.Accessor (.groupLabel >> Just) .x .y

verticalGrouped : Int -> Html msg
verticalGrouped width =
    Bar.init
        { margin = margin
        , width = width
        , height = height
        }
        |> Bar.withColorPalette colorScheme
        |> Bar.withColumnTitle
            (Bar.yColumnTitle valueFormatter)
        |> Bar.withGroupedLayout
        |> Bar.withYAxis yAxis
        |> Bar.withXAxis xAxis
        |> Bar.render ( Data.groupData, accessor )
        """
