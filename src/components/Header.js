
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalHeader = styled.header`
    ${props => formatStyles(props)};
`;

const Header = props => <FunctionalHeader { ...props }>{props.children}</FunctionalHeader>;

export default Header;
