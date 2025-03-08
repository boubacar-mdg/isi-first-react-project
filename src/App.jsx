import React from "react";
import "./App.css";
import bv from "./App.module.css";

const App = () => {
  const inlineStyle = {
    color: "blue",
    fontSize: "40px",
  };

  return (
    <>
      <head>
        <title>ISI</title>
      </head>
      <body>
        <p style={inlineStyle}>Lorem ipsum</p>
        <p
          style={{
            color: "blue",
            fontSize: "40px",
          }}
        >
          Lorem ipsum
        </p>
        <p className="cssClass">Lorem</p>
        <p id="cssId">Ipsum</p>
        <div id="container">
          <p>Lorem ipsum</p>
        </div>
        <p className={bv.cssClass}>Dolor sit amet</p>
      </body>
    </>
  );
};

export default App;
