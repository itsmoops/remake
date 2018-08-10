
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalKbd = styled.kbd`
    ${props => getStyleProps(props)}
`;

const Kbd = props => {
    return (
        <FunctionalKbd { ...props }>
            {props.children}
        </FunctionalKbd>
    )
};

export default Kbd;
