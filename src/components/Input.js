
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalInput = styled.input`
    ${props => formatStyles(props)};
`;

const Input = props => <FunctionalInput { ...props }>{props.children}</FunctionalInput>;

export default Input;
