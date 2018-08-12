
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalNoscript = styled.noscript`
    ${props => formatStyles(props)};
`;

const Noscript = props => <FunctionalNoscript { ...props }>{props.children}</FunctionalNoscript>;

export default Noscript;
