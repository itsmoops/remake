
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalLink = styled.link`
    ${props => formatStyles(props)};
`;

const Link = props => <FunctionalLink { ...props }>{props.children}</FunctionalLink>;

export default Link;
