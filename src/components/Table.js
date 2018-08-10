
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalTable = styled.table`
    ${props => getStyleProps(props)}
`;

const Table = props => {
    return (
        <FunctionalTable { ...props }>
            {props.children}
        </FunctionalTable>
    )
};

export default Table;
  