
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalPolyline = styled.polyline`
    ${props => formatStyles(props)};
`;

const Polyline = props => <FunctionalPolyline { ...props }>{props.children}</FunctionalPolyline>;

export default Polyline;
