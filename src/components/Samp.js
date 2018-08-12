
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalSamp = styled.samp`
    ${props => formatStyles(props)};
`;

const Samp = props => <FunctionalSamp { ...props }>{props.children}</FunctionalSamp>;

export default Samp;
