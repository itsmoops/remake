
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalSpan = styled.span`
    ${props => formatStyles(props)};
`;

const Span = props => <FunctionalSpan { ...props }>{props.children}</FunctionalSpan>;

export default Span;
