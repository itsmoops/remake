
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalCol = styled.col`
    ${props => getStyleProps(props)}
`;

const Col = props => {
    return (
        <FunctionalCol { ...props }>
            {props.children}
        </FunctionalCol>
    )
};

export default Col;
