
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalRt = styled.rt`
    ${props => formatStyles(props)};
`;

const Rt = props => <FunctionalRt { ...props }>{props.children}</FunctionalRt>;

export default Rt;
