
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalLi = styled.li`
    ${props => formatStyles(props)};
`;

const Li = props => <FunctionalLi { ...props }>{props.children}</FunctionalLi>;

export default Li;
