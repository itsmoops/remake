
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalOption = styled.option`
    ${props => formatStyles(props)};
`;

const Option = props => <FunctionalOption { ...props }>{props.children}</FunctionalOption>;

export default Option;
