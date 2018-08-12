
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalScript = styled.script`
    ${props => formatStyles(props)};
`;

const Script = props => <FunctionalScript { ...props }>{props.children}</FunctionalScript>;

export default Script;
