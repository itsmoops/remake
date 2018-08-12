
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalS = styled.s`
    ${props => formatStyles(props)};
`;

const S = props => <FunctionalS { ...props }>{props.children}</FunctionalS>;

export default S;
