
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalAudio = styled.audio`
    ${props => formatStyles(props)};
`;

const Audio = props => <FunctionalAudio { ...props }>{props.children}</FunctionalAudio>;

export default Audio;
