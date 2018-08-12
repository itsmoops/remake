
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalAddress = styled.address`
    ${props => formatStyles(props)};
`;

const Address = props => <FunctionalAddress { ...props }>{props.children}</FunctionalAddress>;

export default Address;
