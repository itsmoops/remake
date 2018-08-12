
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalDialog = styled.dialog`
    ${props => formatStyles(props)};
`;

const Dialog = props => <FunctionalDialog { ...props }>{props.children}</FunctionalDialog>;

export default Dialog;
