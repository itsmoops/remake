
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalI = styled.i`
    ${props => formatStyles(props)};
`;

const I = props => <FunctionalI { ...props }>{props.children}</FunctionalI>;

export default I;
