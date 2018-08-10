
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalOutput = styled.output`
    ${props => getStyleProps(props)}
`;

const Output = props => {
    return (
        <FunctionalOutput { ...props }>
            {props.children}
        </FunctionalOutput>
    )
};

export default Output;
