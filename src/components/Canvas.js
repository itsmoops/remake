
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalCanvas = styled.canvas`
    ${props => formatStyles(props)};
`;

const Canvas = props => <FunctionalCanvas { ...props }>{props.children}</FunctionalCanvas>;

export default Canvas;
