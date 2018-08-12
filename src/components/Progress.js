
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalProgress = styled.progress`
    ${props => formatStyles(props)};
`;

const Progress = props => <FunctionalProgress { ...props }>{props.children}</FunctionalProgress>;

export default Progress;
