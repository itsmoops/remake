
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalHtml = styled.html`
    ${props => formatStyles(props)};
`;

const Html = props => <FunctionalHtml { ...props }>{props.children}</FunctionalHtml>;

export default Html;
