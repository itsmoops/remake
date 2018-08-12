
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalU = styled.u`
    ${props => formatStyles(props)};
`;

const U = props => <FunctionalU { ...props }>{props.children}</FunctionalU>;

export default U;
