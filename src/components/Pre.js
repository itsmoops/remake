
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalPre = styled.pre`
    ${props => formatStyles(props)};
`;

const Pre = props => <FunctionalPre { ...props }>{props.children}</FunctionalPre>;

export default Pre;
