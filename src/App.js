import React from "react";
import ReactDOM from "react-dom";
import { Animal } from "./Animal";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Animal, {
      name: "Tiger",
      animal: "Tiger",
      mainColor: "Yellow",
    }),
    React.createElement(Animal, {
      name: "Lion",
      animal: "Lion",
      mainColor: "Orange",
    }),
    React.createElement(Animal, {
      name: "Cat",
      animal: "Cat",
      mainColor: "White",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
