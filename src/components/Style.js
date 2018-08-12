
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalStyle = styled.style`
    ${props => formatStyles(props)};
`;

const Style = props => <FunctionalStyle { ...props }>{props.children}</FunctionalStyle>;

export default Style;
