import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import {createStore, applyMiddleware} from "redux"
import {Provider} from "react-redux"
import reducer from "Reducer/index"
import thunk from "redux-thunk"
import {createGlobalStyle} from "styled-components"
import horizonrounded from 'Asset/horizonrounded.woff'
import horizonrounded2 from 'Asset/horizonrounded.woff2'

const GlobalStyles = createGlobalStyle`
    @font-face {
      font-family: 'horizon_roundedbold';
      font-display: swap;
      src: url(${horizonrounded2}) format('woff2'), url(${horizonrounded}) format('woff');
      font-weight: normal;
      font-style: normal;
    }
    
    body {
        margin: 0;
        padding: 0;
        font-family: 'horizon_roundedbold', sans-serif;
    }
`

const store: any = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <GlobalStyles/>
        <App/>
    </Provider>,
    document.getElementById("root")
)
