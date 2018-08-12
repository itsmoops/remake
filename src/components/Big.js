
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalBig = styled.big`
    ${props => formatStyles(props)};
`;

const Big = props => <FunctionalBig { ...props }>{props.children}</FunctionalBig>;

export default Big;
