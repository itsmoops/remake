
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalHr = styled.hr`
    ${props => formatStyles(props)};
`;

const Hr = props => <FunctionalHr { ...props }>{props.children}</FunctionalHr>;

export default Hr;
