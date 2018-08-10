
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalVar = styled.var`
    ${props => getStyleProps(props)}
`;

const Var = props => {
    return (
        <FunctionalVar { ...props }>
            {props.children}
        </FunctionalVar>
    )
};

export default Var;
