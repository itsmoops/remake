
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalDl = styled.dl`
    ${props => getStyleProps(props)}
`;

const Dl = props => {
    return (
        <FunctionalDl { ...props }>
            {props.children}
        </FunctionalDl>
    )
};

export default Dl;
