
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalTextarea = styled.textarea`
    ${props => formatStyles(props)};
`;

const Textarea = props => <FunctionalTextarea { ...props }>{props.children}</FunctionalTextarea>;

export default Textarea;
