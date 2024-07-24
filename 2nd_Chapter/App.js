// <const heading = React.createElement("h1", {id:"heading",xyz:"abc"}," hello!");
// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);  
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div",
    {id:"parent"},
    React.createElement(
        "div",

        {id:"child"},
        [React.createElement("h1",{},"hello"), React.createElement("h2",{},"friend")]
    )

);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);