import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from './reducer/reducer';
import reduxThunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));