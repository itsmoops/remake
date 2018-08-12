
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalTbody = styled.tbody`
    ${props => formatStyles(props)};
`;

const Tbody = props => <FunctionalTbody { ...props }>{props.children}</FunctionalTbody>;

export default Tbody;
