module Main exposing (..)

import Bar
import BarStacked
import Browser
import Helpers
import Html exposing (Html)
import Html.Attributes as Attributes
import Line
import LineAnimated
import Task



-- MODEL


type alias Model =
    { width : Int
    , height : Int
    , lineAnimated : LineAnimated.Model
    , line : Line.Model
    }



-- UPDATE


type Msg
    = NoOp
    | LineAnimatedMsg LineAnimated.Msg
    | LineMsg Line.Msg


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



-- VIEW


view : Model -> Html Msg
view model =
    Html.div [ Attributes.class "content" ]
        [ introView model
        , exampleView (LineAnimated.view model model.lineAnimated) model
        , exampleView (Line.view model model.line |> List.map (Html.map LineMsg)) model
        , exampleView (BarStacked.view model) model
        , exampleView (Bar.view model) model
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
        , Html.h2 [] [ Html.text "Accessible and easy to create charts in elm" ]
        ]


exampleView : List (Html Msg) -> Model -> Html Msg
exampleView content model =
    let
        height =
            model.width
                |> Helpers.toChartWidth
                |> Helpers.toChartHeight
                |> (*) 1.2
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
      }
    , Cmd.map LineAnimatedMsg (Task.perform identity (Task.succeed LineAnimated.StartAnimation))
    )



-- MAIN


main =
    Browser.element
        { init = init
        , subscriptions = subscriptions
        , update = update
        , view = view
        }
