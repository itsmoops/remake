
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalTd = styled.td`
    ${props => getStyleProps(props)}
`;

const Td = props => {
    return (
        <FunctionalTd { ...props }>
            {props.children}
        </FunctionalTd>
    )
};

export default Td;
