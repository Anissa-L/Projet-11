import React from "react";
import ReactDOM from "react-dom/client";
import "../src/sass/index.scss"; //style à ajouter scss
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//REDUX
import { Provider } from "react-redux";
import store from "../src/redux/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
