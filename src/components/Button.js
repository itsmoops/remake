
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalButton = styled.button`
    ${props => formatStyles(props)};
`;

const Button = props => <FunctionalButton { ...props }>{props.children}</FunctionalButton>;

export default Button;
