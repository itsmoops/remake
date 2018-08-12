
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalRect = styled.rect`
    ${props => formatStyles(props)};
`;

const Rect = props => <FunctionalRect { ...props }>{props.children}</FunctionalRect>;

export default Rect;
