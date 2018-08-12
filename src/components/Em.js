
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalEm = styled.em`
    ${props => formatStyles(props)};
`;

const Em = props => <FunctionalEm { ...props }>{props.children}</FunctionalEm>;

export default Em;
