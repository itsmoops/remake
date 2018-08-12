
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalMenuitem = styled.menuitem`
    ${props => formatStyles(props)};
`;

const Menuitem = props => <FunctionalMenuitem { ...props }>{props.children}</FunctionalMenuitem>;

export default Menuitem;
