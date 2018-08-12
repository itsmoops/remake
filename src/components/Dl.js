
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalDl = styled.dl`
    ${props => formatStyles(props)};
`;

const Dl = props => <FunctionalDl { ...props }>{props.children}</FunctionalDl>;

export default Dl;
