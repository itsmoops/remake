
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalDiv = styled.div`
    ${props => getStyleProps(props)}
`;

const Div = props => {
    return (
        <FunctionalDiv { ...props }>
            {props.children}
        </FunctionalDiv>
    )
};

export default Div;
