
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalCite = styled.cite`
    ${props => formatStyles(props)};
`;

const Cite = props => <FunctionalCite { ...props }>{props.children}</FunctionalCite>;

export default Cite;
