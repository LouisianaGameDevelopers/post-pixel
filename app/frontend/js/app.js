import Turbolinks from "turbolinks";
import React from "react";
import ReactDOM from "react-dom";
import Burger from "./components/Burger";
Turbolinks.start();

module.exports = {
  init() {
    document.addEventListener("turbolinks:load", () => {
      ReactDOM.render(<Burger />, document.querySelector("#burger"));
    });
  }
};
