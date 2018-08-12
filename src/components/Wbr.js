
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalWbr = styled.wbr`
    ${props => formatStyles(props)};
`;

const Wbr = props => <FunctionalWbr { ...props }>{props.children}</FunctionalWbr>;

export default Wbr;
