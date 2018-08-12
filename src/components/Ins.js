
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalIns = styled.ins`
    ${props => formatStyles(props)};
`;

const Ins = props => <FunctionalIns { ...props }>{props.children}</FunctionalIns>;

export default Ins;
