
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalB = styled.b`
    ${props => formatStyles(props)};
`;

const B = props => <FunctionalB { ...props }>{props.children}</FunctionalB>;

export default B;
