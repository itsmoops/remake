
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalTrack = styled.track`
    ${props => getStyleProps(props)}
`;

const Track = props => {
    return (
        <FunctionalTrack { ...props }>
            {props.children}
        </FunctionalTrack>
    )
};

export default Track;
