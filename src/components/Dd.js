
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalDd = styled.dd`
    ${props => formatStyles(props)};
`;

const Dd = props => <FunctionalDd { ...props }>{props.children}</FunctionalDd>;

export default Dd;
