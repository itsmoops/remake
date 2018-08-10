
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalH2 = styled.h2`
    ${props => getStyleProps(props)}
`;

const H2 = props => {
    return (
        <FunctionalH2 { ...props }>
            {props.children}
        </FunctionalH2>
    )
};

export default H2;
