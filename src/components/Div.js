import React from "react";
import styled from "styled-components";
import { getStyleProps } from "../helpers/style-props";

const FunctionalDiv = styled.div`
  ${props => getStyleProps(props, 0)};

  @media (min-width: 576px) {
    ${props => getStyleProps(props, 1)};
  }

  @media (min-width: 768px) {
    ${props => getStyleProps(props, 2)};
  }

  @media (min-width: 992px) {
    ${props => getStyleProps(props, 3)};
  }

  @media (min-width: 1200px) {
    ${props => getStyleProps(props, 4)};
  }
`;

const Div = props => {
  return <FunctionalDiv {...props}>{props.children}</FunctionalDiv>;
};

export default Div;
