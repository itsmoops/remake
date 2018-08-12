
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalCircle = styled.circle`
    ${props => formatStyles(props)};
`;

const Circle = props => <FunctionalCircle { ...props }>{props.children}</FunctionalCircle>;

export default Circle;
