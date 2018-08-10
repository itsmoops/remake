
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalTspan = styled.tspan`
    ${props => getStyleProps(props)}
`;

const Tspan = props => {
    return (
        <FunctionalTspan { ...props }>
            {props.children}
        </FunctionalTspan>
    )
};

export default Tspan;
