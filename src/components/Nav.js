
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalNav = styled.nav`
    ${props => formatStyles(props)};
`;

const Nav = props => <FunctionalNav { ...props }>{props.children}</FunctionalNav>;

export default Nav;
