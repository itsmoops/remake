
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalBdi = styled.bdi`
    ${props => formatStyles(props)};
`;

const Bdi = props => <FunctionalBdi { ...props }>{props.children}</FunctionalBdi>;

export default Bdi;
