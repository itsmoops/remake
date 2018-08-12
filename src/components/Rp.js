
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalRp = styled.rp`
    ${props => formatStyles(props)};
`;

const Rp = props => <FunctionalRp { ...props }>{props.children}</FunctionalRp>;

export default Rp;
