
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalOl = styled.ol`
    ${props => formatStyles(props)};
`;

const Ol = props => <FunctionalOl { ...props }>{props.children}</FunctionalOl>;

export default Ol;
