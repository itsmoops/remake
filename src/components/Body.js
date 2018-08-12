
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalBody = styled.body`
    ${props => formatStyles(props)};
`;

const Body = props => <FunctionalBody { ...props }>{props.children}</FunctionalBody>;

export default Body;
