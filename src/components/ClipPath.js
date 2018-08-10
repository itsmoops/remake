
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalClipPath = styled.clipPath`
    ${props => getStyleProps(props)}
`;

const ClipPath = props => {
    return (
        <FunctionalClipPath { ...props }>
            {props.children}
        </FunctionalClipPath>
    )
};

export default ClipPath;
