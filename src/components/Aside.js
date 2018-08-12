
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalAside = styled.aside`
    ${props => formatStyles(props)};
`;

const Aside = props => <FunctionalAside { ...props }>{props.children}</FunctionalAside>;

export default Aside;
