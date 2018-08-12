
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalMark = styled.mark`
    ${props => formatStyles(props)};
`;

const Mark = props => <FunctionalMark { ...props }>{props.children}</FunctionalMark>;

export default Mark;
