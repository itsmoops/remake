
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalFigure = styled.figure`
    ${props => formatStyles(props)};
`;

const Figure = props => <FunctionalFigure { ...props }>{props.children}</FunctionalFigure>;

export default Figure;
