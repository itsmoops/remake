
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalH3 = styled.h3`
    ${props => formatStyles(props)};
`;

const H3 = props => <FunctionalH3 { ...props }>{props.children}</FunctionalH3>;

export default H3;
