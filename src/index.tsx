import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import {applyMiddleware, createStore} from "redux"
import {Provider} from "react-redux"
import reducer from "Reducer/index"
import thunk from "redux-thunk"
import {createGlobalStyle} from "styled-components"
import './index.css'

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'horizon_roundedbold', sans-serif;
    }
    
    .m-auto { margin: 0  auto; }
    .p-16 { padding: 16px; }
    .tc { text-align: center; }
    .dib { display: inline-block; }
    
    .dg { display: grid; }
    
    .df { display: flex; }
    .jcc { justify-content: center; }
    .aic { align-items: center; }
    .jcsb { justify-content: space-between; }
`

const store: any = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <GlobalStyles/>
        <App/>
    </Provider>,
    document.getElementById("root")
)
