
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalBdo = styled.bdo`
    ${props => formatStyles(props)};
`;

const Bdo = props => <FunctionalBdo { ...props }>{props.children}</FunctionalBdo>;

export default Bdo;
