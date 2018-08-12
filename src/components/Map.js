
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalMap = styled.map`
    ${props => formatStyles(props)};
`;

const Map = props => <FunctionalMap { ...props }>{props.children}</FunctionalMap>;

export default Map;
