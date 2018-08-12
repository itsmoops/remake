
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalKeygen = styled.keygen`
    ${props => formatStyles(props)};
`;

const Keygen = props => <FunctionalKeygen { ...props }>{props.children}</FunctionalKeygen>;

export default Keygen;
