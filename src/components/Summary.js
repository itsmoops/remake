
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalSummary = styled.summary`
    ${props => formatStyles(props)};
`;

const Summary = props => <FunctionalSummary { ...props }>{props.children}</FunctionalSummary>;

export default Summary;
