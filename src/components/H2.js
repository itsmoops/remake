
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalH2 = styled.h2`
    ${props => formatStyles(props)};
`;

const H2 = props => <FunctionalH2 { ...props }>{props.children}</FunctionalH2>;

export default H2;
