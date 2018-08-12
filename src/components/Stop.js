
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalStop = styled.stop`
    ${props => formatStyles(props)};
`;

const Stop = props => <FunctionalStop { ...props }>{props.children}</FunctionalStop>;

export default Stop;
