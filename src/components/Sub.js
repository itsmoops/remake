
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalSub = styled.sub`
    ${props => formatStyles(props)};
`;

const Sub = props => <FunctionalSub { ...props }>{props.children}</FunctionalSub>;

export default Sub;
