
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalA = styled.a`
    ${props => formatStyles(props)};
`;

const A = props => <FunctionalA { ...props }>{props.children}</FunctionalA>;

export default A;
