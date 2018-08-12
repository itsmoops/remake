
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalCol = styled.col`
    ${props => formatStyles(props)};
`;

const Col = props => <FunctionalCol { ...props }>{props.children}</FunctionalCol>;

export default Col;
