
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalTh = styled.th`
    ${props => formatStyles(props)};
`;

const Th = props => <FunctionalTh { ...props }>{props.children}</FunctionalTh>;

export default Th;
