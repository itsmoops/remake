
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalAbbr = styled.abbr`
    ${props => formatStyles(props)};
`;

const Abbr = props => <FunctionalAbbr { ...props }>{props.children}</FunctionalAbbr>;

export default Abbr;
