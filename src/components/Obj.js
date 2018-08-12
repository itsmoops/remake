
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalObj = styled.object`
    ${props => formatStyles(props)};
`;

const Obj = props => <FunctionalObj { ...props }>{props.children}</FunctionalObj>;

export default Obj;
