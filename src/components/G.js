
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalG = styled.g`
    ${props => getStyleProps(props)}
`;

const G = props => {
    return (
        <FunctionalG { ...props }>
            {props.children}
        </FunctionalG>
    )
};

export default G;
