
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalKbd = styled.kbd`
    ${props => formatStyles(props)};
`;

const Kbd = props => <FunctionalKbd { ...props }>{props.children}</FunctionalKbd>;

export default Kbd;
