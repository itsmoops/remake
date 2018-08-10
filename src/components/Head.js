
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalHead = styled.head`
    ${props => getStyleProps(props)}
`;

const Head = props => {
    return (
        <FunctionalHead { ...props }>
            {props.children}
        </FunctionalHead>
    )
};

export default Head;
