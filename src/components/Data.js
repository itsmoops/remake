
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalData = styled.data`
    ${props => formatStyles(props)};
`;

const Data = props => <FunctionalData { ...props }>{props.children}</FunctionalData>;

export default Data;
