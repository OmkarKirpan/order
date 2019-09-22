import React from "react";
import ReactDOM from "react-dom";

import Checkout from "./checkout";

// import "./styles.css";

function App() {
  return (
    <div className="App">
      <Checkout />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
