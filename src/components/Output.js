
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalOutput = styled.output`
    ${props => formatStyles(props)};
`;

const Output = props => <FunctionalOutput { ...props }>{props.children}</FunctionalOutput>;

export default Output;
