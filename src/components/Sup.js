
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalSup = styled.sup`
    ${props => formatStyles(props)};
`;

const Sup = props => <FunctionalSup { ...props }>{props.children}</FunctionalSup>;

export default Sup;
