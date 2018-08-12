
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalThead = styled.thead`
    ${props => formatStyles(props)};
`;

const Thead = props => <FunctionalThead { ...props }>{props.children}</FunctionalThead>;

export default Thead;
