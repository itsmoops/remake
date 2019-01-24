import React from "react";
import ReactDOM from "react-dom";
import { injectGlobal } from "styled-components";
import { Div, H1, P } from "./index";

// Arrays can be used for responsive styles
const styles = {
  color: ["black", "white", "white", "white", "black"],
  backgroundColor: ["bisque", "cornflowerblue", "slategray", "darkolivegreen", "tomato"],
  height: "100%",
  width: ["100%", "70%", "50%", "35%", "20%"],
  padding: "20"
};

const App = () => {
  injectGlobal`
    body {
      margin: 0;
      font-family: Arial;
      font-size: 16px;
      color: black;
      background: white;
    }
  `;
  return (
    <Div {...styles}>
      <H1>Welcome to My Revival App!</H1>
      <P>Lorem Ipsum, etc.</P>
    </Div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
