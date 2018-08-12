
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalPath = styled.path`
    ${props => formatStyles(props)};
`;

const Path = props => <FunctionalPath { ...props }>{props.children}</FunctionalPath>;

export default Path;
