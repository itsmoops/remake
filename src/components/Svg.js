
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalSvg = styled.svg`
    ${props => getStyleProps(props)}
`;

const Svg = props => {
    return (
        <FunctionalSvg { ...props }>
            {props.children}
        </FunctionalSvg>
    )
};

export default Svg;
