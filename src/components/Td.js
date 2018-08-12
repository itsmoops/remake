
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalTd = styled.td`
    ${props => formatStyles(props)};
`;

const Td = props => <FunctionalTd { ...props }>{props.children}</FunctionalTd>;

export default Td;
