
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalUl = styled.ul`
    ${props => formatStyles(props)};
`;

const Ul = props => <FunctionalUl { ...props }>{props.children}</FunctionalUl>;

export default Ul;
