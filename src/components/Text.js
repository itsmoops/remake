
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalText = styled.text`
    ${props => formatStyles(props)};
`;

const Text = props => <FunctionalText { ...props }>{props.children}</FunctionalText>;

export default Text;
