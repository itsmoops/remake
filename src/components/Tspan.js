
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalTspan = styled.tspan`
    ${props => formatStyles(props)};
`;

const Tspan = props => <FunctionalTspan { ...props }>{props.children}</FunctionalTspan>;

export default Tspan;
