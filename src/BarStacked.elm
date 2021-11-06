module BarStacked exposing
    ( Model
    , Msg(..)
    , initialModel
    , update
    , view
    )

import Axis
import Chart.Bar as Bar
import City exposing (City)
import CodePrev
import Color exposing (Color, rgb255)
import Csv.Decode as Decode exposing (Decoder)
import Helpers
import Html exposing (Html)
import Html.Attributes as Attributes
import Numeral
import Scale.Color



-- UPDATE


type alias Model =
    { data : List City
    }


initialModel : Model
initialModel =
    { data = []
    }


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
                        |> List.map
                            (\d ->
                                if d.urbanAgglomeration == "Shanghai" then
                                    { d | populationMillions = -d.populationMillions }

                                else
                                    d
                            )
            in
            ( { model | data = selectedData }, Cmd.none )

        OnData (Err err) ->
            ( model, Cmd.none )


colorScheme : List Color
colorScheme =
    Scale.Color.tableau10


accessor : Bar.Accessor City
accessor =
    Bar.Accessor
        (.year >> String.fromFloat >> Just)
        .urbanAgglomeration
        .populationMillions


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
    [ "1950", "1960", "1970", "1980", "1990", "2000", "2010", "2020", "2030" ]


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


chart : Int -> Model -> Html msg
chart width model =
    Bar.init
        { margin = Helpers.marginWithLabel
        , width = Helpers.toChartWidth width
        , height =
            width
                |> Helpers.toChartWidth
                |> Helpers.toChartHeight
        }
        |> Bar.withColorPalette colorScheme
        |> Bar.withBarStyle [ ( "stroke", "#fff" ), ( "stroke-width", "0.5" ) ]
        |> Bar.withColumnTitle (Bar.yColumnTitle valueFormatter)
        |> Bar.withGroupedLayout
        |> Bar.withYAxis yAxis
        |> Bar.withXAxis xAxis
        |> Bar.withStackedLayout Bar.diverging
        |> Bar.render ( model.data, accessor )


desc : Html msg
desc =
    Html.section [ Attributes.class "example__desc" ]
        [ Html.h3 [] [ Html.text "Stacked vertical bar chart" ]
        , Html.p [] [ Html.text "TODO" ]
        , Html.a [ Attributes.href "https://github.com/data-viz-lab/elm-chart-builder-presentation/blob/main/src/BarStacked.elm" ]
            [ Html.text "source" ]
        ]


labelsView : Int -> Model -> List (Html Msg)
labelsView width model =
    model.data
        |> List.take 2
        |> List.indexedMap
            (\i d ->
                let
                    value =
                        100

                    margin =
                        40

                    top =
                        if i == 0 then
                            value
                                |> String.fromInt

                        else
                            width
                                |> Helpers.toChartWidth
                                |> Helpers.toChartHeight
                                |> (\v -> v - margin - value |> String.fromFloat)
                in
                Html.p
                    [ Attributes.class ("label-" ++ String.fromInt i)
                    , Attributes.style "top" (top ++ "px")
                    ]
                    [ Html.text d.urbanAgglomeration ]
            )


view : { a | width : Int } -> Model -> List (Html Msg)
view { width } model =
    [ desc
    , Html.div [ Attributes.class "chart-wrapper" ]
        (chart width model
            :: labelsView width model
        )
    , CodePrev.codePrev CodePrev.codePrevBarStacked
    ]
