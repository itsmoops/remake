
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalDel = styled.del`
    ${props => formatStyles(props)};
`;

const Del = props => <FunctionalDel { ...props }>{props.children}</FunctionalDel>;

export default Del;
