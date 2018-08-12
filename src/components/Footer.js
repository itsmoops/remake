
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalFooter = styled.footer`
    ${props => formatStyles(props)};
`;

const Footer = props => <FunctionalFooter { ...props }>{props.children}</FunctionalFooter>;

export default Footer;
