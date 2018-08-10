
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalS = styled.s`
    ${props => getStyleProps(props)}
`;

const S = props => {
    return (
        <FunctionalS { ...props }>
            {props.children}
        </FunctionalS>
    )
};

export default S;
