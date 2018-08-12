
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalTr = styled.tr`
    ${props => formatStyles(props)};
`;

const Tr = props => <FunctionalTr { ...props }>{props.children}</FunctionalTr>;

export default Tr;
