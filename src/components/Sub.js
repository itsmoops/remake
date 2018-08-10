
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalSub = styled.sub`
    ${props => getStyleProps(props)}
`;

const Sub = props => {
    return (
        <FunctionalSub { ...props }>
            {props.children}
        </FunctionalSub>
    )
};

export default Sub;
