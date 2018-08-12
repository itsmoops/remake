
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalP = styled.p`
    ${props => formatStyles(props)};
`;

const P = props => <FunctionalP { ...props }>{props.children}</FunctionalP>;

export default P;
