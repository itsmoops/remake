
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalBr = styled.br`
    ${props => formatStyles(props)};
`;

const Br = props => <FunctionalBr { ...props }>{props.children}</FunctionalBr>;

export default Br;
