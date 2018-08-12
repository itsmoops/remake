
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalForeignObject = styled.foreignObject`
    ${props => formatStyles(props)};
`;

const ForeignObject = props => <FunctionalForeignObject { ...props }>{props.children}</FunctionalForeignObject>;

export default ForeignObject;
