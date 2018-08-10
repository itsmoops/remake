import React from "react";
import ReactDOM from "react-dom";
import { Div } from "./index";

const App = () => {
  return (
    <Div color="white" background="blue" height="100%">
      test
    </Div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
