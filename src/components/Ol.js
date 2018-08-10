
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalOl = styled.ol`
    ${props => getStyleProps(props)}
`;

const Ol = props => {
    return (
        <FunctionalOl { ...props }>
            {props.children}
        </FunctionalOl>
    )
};

export default Ol;
