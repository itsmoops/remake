
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalVideo = styled.video`
    ${props => formatStyles(props)};
`;

const Video = props => <FunctionalVideo { ...props }>{props.children}</FunctionalVideo>;

export default Video;
