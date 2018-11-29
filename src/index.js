import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App.jsx";
import reducer from "./reducers/reducer.js";
import './index.css';

var store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
