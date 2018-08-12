
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalCode = styled.code`
    ${props => formatStyles(props)};
`;

const Code = props => <FunctionalCode { ...props }>{props.children}</FunctionalCode>;

export default Code;
