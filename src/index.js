import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import reducer from './reducer/reducer';
import thunk from "redux-thunk";
import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'horizon_roundedbold', sans-serif;
  }
`;

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<GlobalStyles/>
		<App/>
	</Provider>,
	document.getElementById('root')
);