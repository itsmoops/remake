
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalKeygen = styled.keygen`
    ${props => getStyleProps(props)}
`;

const Keygen = props => {
    return (
        <FunctionalKeygen { ...props }>
            {props.children}
        </FunctionalKeygen>
    )
};

export default Keygen;
