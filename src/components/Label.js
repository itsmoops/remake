
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalLabel = styled.label`
    ${props => formatStyles(props)};
`;

const Label = props => <FunctionalLabel { ...props }>{props.children}</FunctionalLabel>;

export default Label;
