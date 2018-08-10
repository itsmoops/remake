
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalSpan = styled.span`
    ${props => getStyleProps(props)}
`;

const Span = props => {
    return (
        <FunctionalSpan { ...props }>
            {props.children}
        </FunctionalSpan>
    )
};

export default Span;
