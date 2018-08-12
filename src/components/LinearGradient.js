
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalLinearGradient = styled.linearGradient`
    ${props => formatStyles(props)};
`;

const LinearGradient = props => <FunctionalLinearGradient { ...props }>{props.children}</FunctionalLinearGradient>;

export default LinearGradient;
