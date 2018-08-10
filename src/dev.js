import React from "react";
import ReactDOM from "react-dom";
import { Div, H1, P } from "./index";

const styles = {
  color: "black",
  background: "white",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  padding: "20"
};

const App = () => {
  return (
    <Div {...styles}>
      <H1>Welcome!</H1>
      <P>
        This is all written using native HTML elements
      </P>
    </Div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
