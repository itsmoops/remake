
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalH1 = styled.h1`
    ${props => getStyleProps(props)}
`;

const H1 = props => {
    return (
        <FunctionalH1 { ...props }>
            {props.children}
        </FunctionalH1>
    )
};

export default H1;
