
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalRp = styled.rp`
    ${props => getStyleProps(props)}
`;

const Rp = props => {
    return (
        <FunctionalRp { ...props }>
            {props.children}
        </FunctionalRp>
    )
};

export default Rp;
