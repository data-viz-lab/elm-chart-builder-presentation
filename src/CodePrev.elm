module CodePrev exposing
    ( codePrev
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
accessor : Line.Accessor City
accessor =
    Line.cont
        { xGroup = .urbanAgglomeration >> Just
        , xValue = .year
        , yValue = .populationMillions
        }

chart : Int -> Model -> Html msg
chart width model =
    Line.init
        { margin = margin
        , width = width
        , height = height
        }
        |> Line.withColorPalette Scale.Color.tableau10
        |> Line.withLineStyle [ ( "stroke-width", "3" ) ]
        |> Line.withXAxisCont xAxis
        |> Line.withYAxis yAxis
        |> Line.withLabels Line.xGroupLabel
        |> Line.withXContDomain model.xDomain
        |> Line.withYDomain model.yDomain
        -- for performance
        |> Line.withoutTable
        |> Line.render ( model.data, accessor )
        """


codePrevLine : String
codePrevLine =
    """ 
accessor : Line.Accessor City
accessor =
    Line.cont
        { xGroup = .urbanAgglomeration >> Just
        , xValue = .year
        , yValue = .populationMillions
        }

chart : Int -> Model -> Html Msg
chart width model =
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
        |> Line.render ( model.data, accessor )
        """


codePrevBarStacked : String
codePrevBarStacked =
    """ 
accessor : Bar.Accessor City
accessor =
    Bar.Accessor 
        (.year >> String.fromFloat >> Just)
        .urbanAgglomeration
        .populationMillions

chart : Int -> Model -> Html Msg
chart width model =
    Bar.init
        { margin = margin
        , width = width
        , height = height
        }
        |> Bar.withColorPalette colorScheme
        |> Bar.withBarStyle [ ( "stroke", "#fff" ), ( "stroke-width", "0.5" ) ]
        |> Bar.withColumnTitle (Bar.yColumnTitle valueFormatter)
        |> Bar.withGroupedLayout
        |> Bar.withYAxis yAxis
        |> Bar.withXAxis xAxis
        |> Bar.withStackedLayout Bar.diverging
        |> Bar.render ( model.data, accessor )
        """
