
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalSamp = styled.samp`
    ${props => getStyleProps(props)}
`;

const Samp = props => {
    return (
        <FunctionalSamp { ...props }>
            {props.children}
        </FunctionalSamp>
    )
};

export default Samp;
