
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalClipPath = styled.clipPath`
    ${props => formatStyles(props)};
`;

const ClipPath = props => <FunctionalClipPath { ...props }>{props.children}</FunctionalClipPath>;

export default ClipPath;
