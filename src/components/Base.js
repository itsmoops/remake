
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalBase = styled.base`
    ${props => formatStyles(props)};
`;

const Base = props => <FunctionalBase { ...props }>{props.children}</FunctionalBase>;

export default Base;
