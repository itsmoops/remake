
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalMeter = styled.meter`
    ${props => formatStyles(props)};
`;

const Meter = props => <FunctionalMeter { ...props }>{props.children}</FunctionalMeter>;

export default Meter;
