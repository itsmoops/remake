
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalBr = styled.br`
    ${props => getStyleProps(props)}
`;

const Br = props => {
    return (
        <FunctionalBr { ...props }>
            {props.children}
        </FunctionalBr>
    )
};

export default Br;
