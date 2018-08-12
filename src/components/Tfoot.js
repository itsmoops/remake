
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalTfoot = styled.tfoot`
    ${props => formatStyles(props)};
`;

const Tfoot = props => <FunctionalTfoot { ...props }>{props.children}</FunctionalTfoot>;

export default Tfoot;
