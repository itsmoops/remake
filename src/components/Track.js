
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalTrack = styled.track`
    ${props => formatStyles(props)};
`;

const Track = props => <FunctionalTrack { ...props }>{props.children}</FunctionalTrack>;

export default Track;
