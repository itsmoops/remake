
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalU = styled.u`
    ${props => getStyleProps(props)}
`;

const U = props => {
    return (
        <FunctionalU { ...props }>
            {props.children}
        </FunctionalU>
    )
};

export default U;
