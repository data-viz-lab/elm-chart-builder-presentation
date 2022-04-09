module Main exposing (..)

import BarStacked
import Browser
import City
import Helpers
import Html exposing (Html)
import Html.Attributes as Attributes
import Line
import LineAnimated
import LineStacked
import Task



-- MODEL


type alias Model =
    { width : Int
    , height : Int
    , lineAnimated : LineAnimated.Model
    , line : Line.Model
    , lineStacked : LineStacked.Model
    , barStacked : BarStacked.Model
    }



-- UPDATE


type Msg
    = NoOp
    | LineAnimatedMsg LineAnimated.Msg
    | LineMsg Line.Msg
    | LineStackedMsg LineStacked.Msg
    | BarStackedMsg BarStacked.Msg


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )

        LineAnimatedMsg subMsg ->
            LineAnimated.update subMsg model.lineAnimated
                |> (\( subModel, subCmd ) ->
                        ( { model | lineAnimated = subModel }
                        , Cmd.map LineAnimatedMsg subCmd
                        )
                   )

        LineMsg subMsg ->
            Line.update subMsg model.line
                |> (\( subModel, subCmd ) ->
                        ( { model | line = subModel }
                        , Cmd.map LineMsg subCmd
                        )
                   )

        LineStackedMsg subMsg ->
            LineStacked.update subMsg model.lineStacked
                |> (\( subModel, subCmd ) ->
                        ( { model | lineStacked = subModel }
                        , Cmd.map LineStackedMsg subCmd
                        )
                   )

        BarStackedMsg subMsg ->
            BarStacked.update subMsg model.barStacked
                |> (\( subModel, subCmd ) ->
                        ( { model | barStacked = subModel }
                        , Cmd.map BarStackedMsg subCmd
                        )
                   )



-- VIEW


view : Model -> Html Msg
view model =
    Html.div [ Attributes.class "content" ]
        [ introView model
        , exampleView
            (LineAnimated.view model model.lineAnimated
                |> List.map (Html.map LineAnimatedMsg)
            )
            model
        , exampleView
            (LineStacked.view model model.lineStacked
                |> List.map (Html.map LineStackedMsg)
            )
            model
        , exampleView (Line.view model model.line |> List.map (Html.map LineMsg)) model
        , exampleView
            (BarStacked.view model model.barStacked
                |> List.map (Html.map BarStackedMsg)
            )
            model
        , footer
        ]


introView : Model -> Html Msg
introView model =
    Html.section [ Attributes.class "intro" ]
        [ Html.h1 []
            [ Html.a
                [ Attributes.href "https://github.com/data-viz-lab/elm-chart-builder" ]
                [ Html.text "elm-chart-builder" ]
            ]
        , Html.h2 [] [ Html.text "Accessible and easy to create charts in elm v7.0.2" ]
        ]


exampleView : List (Html Msg) -> Model -> Html Msg
exampleView content model =
    let
        height =
            model.width
                |> Helpers.toChartWidth
                |> Helpers.toChartHeight
                |> (*) Helpers.exampleViewMoltiplier
                |> String.fromFloat
    in
    Html.section
        [ Attributes.class "example"
        , Attributes.style "height" (height ++ "px")
        ]
        content


footer : Html msg
footer =
    Html.footer []
        [ Html.p [] [ Html.text "Data source: United Nations, Department of Economic and Social Affairs, Population Division (2018). World Urbanization Prospects: The 2018 Revision, Online Edition." ]
        ]



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ Sub.map LineAnimatedMsg (LineAnimated.subscriptions model.lineAnimated)
        ]



-- INIT


init : { width : Int, height : Int } -> ( Model, Cmd Msg )
init { width, height } =
    ( { width = width
      , height = height
      , lineAnimated = LineAnimated.initialModel
      , line = Line.initialModel
      , lineStacked = LineStacked.initialModel
      , barStacked = BarStacked.initialModel
      }
    , Cmd.batch
        [ Cmd.map LineStackedMsg
            (Task.perform LineStacked.OnData (Task.succeed City.decodeCity))
        , Cmd.map LineAnimatedMsg
            (Task.perform LineAnimated.OnData (Task.succeed City.decodeCity))
        , Cmd.map BarStackedMsg
            (Task.perform BarStacked.OnData (Task.succeed City.decodeCity))
        , Cmd.map LineMsg
            (Task.perform Line.OnData (Task.succeed City.decodeCity))
        ]
    )



-- MAIN


main =
    Browser.element
        { init = init
        , subscriptions = subscriptions
        , update = update
        , view = view
        }
