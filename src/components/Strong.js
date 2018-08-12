
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalStrong = styled.strong`
    ${props => formatStyles(props)};
`;

const Strong = props => <FunctionalStrong { ...props }>{props.children}</FunctionalStrong>;

export default Strong;
