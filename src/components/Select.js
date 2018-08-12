
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalSelect = styled.select`
    ${props => formatStyles(props)};
`;

const Select = props => <FunctionalSelect { ...props }>{props.children}</FunctionalSelect>;

export default Select;
