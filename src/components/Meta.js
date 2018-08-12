
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalMeta = styled.meta`
    ${props => formatStyles(props)};
`;

const Meta = props => <FunctionalMeta { ...props }>{props.children}</FunctionalMeta>;

export default Meta;
