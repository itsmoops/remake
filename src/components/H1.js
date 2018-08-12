
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalH1 = styled.h1`
    ${props => formatStyles(props)};
`;

const H1 = props => <FunctionalH1 { ...props }>{props.children}</FunctionalH1>;

export default H1;
