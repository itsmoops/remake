
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalLegend = styled.legend`
    ${props => formatStyles(props)};
`;

const Legend = props => <FunctionalLegend { ...props }>{props.children}</FunctionalLegend>;

export default Legend;
