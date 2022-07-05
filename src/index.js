import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {createStore,applyMiddleware} from "redux";
import PromiseMW from "redux-promise";
import RootReducer from "./Redux/Reducers/RootReducer";

const MainStore = applyMiddleware(PromiseMW)(createStore);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={MainStore(RootReducer)}>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </Provider>
);

