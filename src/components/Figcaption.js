
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalFigcaption = styled.figcaption`
    ${props => formatStyles(props)};
`;

const Figcaption = props => <FunctionalFigcaption { ...props }>{props.children}</FunctionalFigcaption>;

export default Figcaption;
