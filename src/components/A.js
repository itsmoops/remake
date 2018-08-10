
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalA = styled.a`
    ${props => getStyleProps(props)}
`;

const A = props => {
    return (
        <FunctionalA { ...props }>
            {props.children}
        </FunctionalA>
    )
};

export default A;
