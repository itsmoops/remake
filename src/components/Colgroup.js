
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalColgroup = styled.colgroup`
    ${props => formatStyles(props)};
`;

const Colgroup = props => <FunctionalColgroup { ...props }>{props.children}</FunctionalColgroup>;

export default Colgroup;
