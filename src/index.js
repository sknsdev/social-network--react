import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import state from "./redux/state.js";
import { addPost } from "./redux/state";

//addPost("Alexey", animeurl, "похуй" );

export let RenderAll = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} />
    </React.StrictMode>,
    document.getElementById("root")
  );

}

RenderAll();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
