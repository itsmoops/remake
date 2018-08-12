
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalRuby = styled.ruby`
    ${props => formatStyles(props)};
`;

const Ruby = props => <FunctionalRuby { ...props }>{props.children}</FunctionalRuby>;

export default Ruby;
