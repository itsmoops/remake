
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalMenu = styled.menu`
    ${props => formatStyles(props)};
`;

const Menu = props => <FunctionalMenu { ...props }>{props.children}</FunctionalMenu>;

export default Menu;
