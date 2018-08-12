
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalRadialGradient = styled.radialGradient`
    ${props => formatStyles(props)};
`;

const RadialGradient = props => <FunctionalRadialGradient { ...props }>{props.children}</FunctionalRadialGradient>;

export default RadialGradient;
