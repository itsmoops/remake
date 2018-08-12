
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalBlockquote = styled.blockquote`
    ${props => formatStyles(props)};
`;

const Blockquote = props => <FunctionalBlockquote { ...props }>{props.children}</FunctionalBlockquote>;

export default Blockquote;
