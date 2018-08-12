
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalCaption = styled.caption`
    ${props => formatStyles(props)};
`;

const Caption = props => <FunctionalCaption { ...props }>{props.children}</FunctionalCaption>;

export default Caption;
