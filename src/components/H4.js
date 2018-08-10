
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalH4 = styled.h4`
    ${props => getStyleProps(props)}
`;

const H4 = props => {
    return (
        <FunctionalH4 { ...props }>
            {props.children}
        </FunctionalH4>
    )
};

export default H4;
