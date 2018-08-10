
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalLegend = styled.legend`
    ${props => getStyleProps(props)}
`;

const Legend = props => {
    return (
        <FunctionalLegend { ...props }>
            {props.children}
        </FunctionalLegend>
    )
};

export default Legend;
