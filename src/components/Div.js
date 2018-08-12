
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalDiv = styled.div`
    ${props => formatStyles(props)};
`;

const Div = props => <FunctionalDiv { ...props }>{props.children}</FunctionalDiv>;

export default Div;
