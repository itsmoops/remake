
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalPattern = styled.pattern`
    ${props => formatStyles(props)};
`;

const Pattern = props => <FunctionalPattern { ...props }>{props.children}</FunctionalPattern>;

export default Pattern;
