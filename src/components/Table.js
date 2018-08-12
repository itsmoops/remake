
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalTable = styled.table`
    ${props => formatStyles(props)};
`;

const Table = props => <FunctionalTable { ...props }>{props.children}</FunctionalTable>;

export default Table;
