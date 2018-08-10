
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalNoscript = styled.noscript`
    ${props => getStyleProps(props)}
`;

const Noscript = props => {
    return (
        <FunctionalNoscript { ...props }>
            {props.children}
        </FunctionalNoscript>
    )
};

export default Noscript;
