
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalDfn = styled.dfn`
    ${props => formatStyles(props)};
`;

const Dfn = props => <FunctionalDfn { ...props }>{props.children}</FunctionalDfn>;

export default Dfn;
