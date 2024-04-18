
import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" },
        React.createElement("h1", {}, "I am H1 tag"),
        React.createElement("h1", {}, "I am H1 tag")),
        React.createElement("div", { id: "child2" },
        React.createElement("h1", {}, "I am H1 tag"),
        React.createElement("h1", {}, "I am H1 tag"))
    ]);

const heading = React.createElement("h1", { id: "heading" }, "Hello World from React!");
console.log(parent); // an object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);