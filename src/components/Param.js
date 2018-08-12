
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalParam = styled.param`
    ${props => formatStyles(props)};
`;

const Param = props => <FunctionalParam { ...props }>{props.children}</FunctionalParam>;

export default Param;
