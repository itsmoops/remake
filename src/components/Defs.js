
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalDefs = styled.defs`
    ${props => formatStyles(props)};
`;

const Defs = props => <FunctionalDefs { ...props }>{props.children}</FunctionalDefs>;

export default Defs;
