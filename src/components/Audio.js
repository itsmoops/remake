
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalAudio = styled.audio`
    ${props => getStyleProps(props)}
`;

const Audio = props => {
    return (
        <FunctionalAudio { ...props }>
            {props.children}
        </FunctionalAudio>
    )
};

export default Audio;
