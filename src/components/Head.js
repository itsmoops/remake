
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalHead = styled.head`
    ${props => formatStyles(props)};
`;

const Head = props => <FunctionalHead { ...props }>{props.children}</FunctionalHead>;

export default Head;
