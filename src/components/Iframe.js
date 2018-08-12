
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalIframe = styled.iframe`
    ${props => formatStyles(props)};
`;

const Iframe = props => <FunctionalIframe { ...props }>{props.children}</FunctionalIframe>;

export default Iframe;
