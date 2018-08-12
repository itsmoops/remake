
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalQ = styled.q`
    ${props => formatStyles(props)};
`;

const Q = props => <FunctionalQ { ...props }>{props.children}</FunctionalQ>;

export default Q;
