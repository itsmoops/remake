import React from "react";
import styled from "styled-components";
// import styleProps from "../helpers/helpers";

const FunctionalDiv = styled.div.attrs({
  style: props => {
    color: props.color;
  }
});

// console.log(styleProps);

const Div = props => {
  return <FunctionalDiv {...props}>{props.children}</FunctionalDiv>;
};

export default Div;
