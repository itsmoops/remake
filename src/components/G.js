
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalG = styled.g`
    ${props => formatStyles(props)};
`;

const G = props => <FunctionalG { ...props }>{props.children}</FunctionalG>;

export default G;
