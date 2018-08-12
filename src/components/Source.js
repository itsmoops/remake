
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalSource = styled.source`
    ${props => formatStyles(props)};
`;

const Source = props => <FunctionalSource { ...props }>{props.children}</FunctionalSource>;

export default Source;
