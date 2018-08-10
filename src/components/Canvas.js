
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalCanvas = styled.canvas`
    ${props => getStyleProps(props)}
`;

const Canvas = props => {
    return (
        <FunctionalCanvas { ...props }>
            {props.children}
        </FunctionalCanvas>
    )
};

export default Canvas;
