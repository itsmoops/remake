
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalTime = styled.time`
    ${props => formatStyles(props)};
`;

const Time = props => <FunctionalTime { ...props }>{props.children}</FunctionalTime>;

export default Time;
