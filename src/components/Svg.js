
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalSvg = styled.svg`
    ${props => formatStyles(props)};
`;

const Svg = props => <FunctionalSvg { ...props }>{props.children}</FunctionalSvg>;

export default Svg;
