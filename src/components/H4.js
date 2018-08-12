
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalH4 = styled.h4`
    ${props => formatStyles(props)};
`;

const H4 = props => <FunctionalH4 { ...props }>{props.children}</FunctionalH4>;

export default H4;
