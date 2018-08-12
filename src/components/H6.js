
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalH6 = styled.h6`
    ${props => formatStyles(props)};
`;

const H6 = props => <FunctionalH6 { ...props }>{props.children}</FunctionalH6>;

export default H6;
