
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalVar = styled.var`
    ${props => formatStyles(props)};
`;

const Var = props => <FunctionalVar { ...props }>{props.children}</FunctionalVar>;

export default Var;
