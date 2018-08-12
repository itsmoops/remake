
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalPolygon = styled.polygon`
    ${props => formatStyles(props)};
`;

const Polygon = props => <FunctionalPolygon { ...props }>{props.children}</FunctionalPolygon>;

export default Polygon;
