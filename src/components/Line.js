
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalLine = styled.line`
    ${props => formatStyles(props)};
`;

const Line = props => <FunctionalLine { ...props }>{props.children}</FunctionalLine>;

export default Line;
