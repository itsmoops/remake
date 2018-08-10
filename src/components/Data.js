
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalData = styled.data`
    ${props => getStyleProps(props)}
`;

const Data = props => {
    return (
        <FunctionalData { ...props }>
            {props.children}
        </FunctionalData>
    )
};

export default Data;
