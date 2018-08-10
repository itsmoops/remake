
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalVideo = styled.video`
    ${props => getStyleProps(props)}
`;

const Video = props => {
    return (
        <FunctionalVideo { ...props }>
            {props.children}
        </FunctionalVideo>
    )
};

export default Video;
  