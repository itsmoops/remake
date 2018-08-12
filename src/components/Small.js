
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalSmall = styled.small`
    ${props => formatStyles(props)};
`;

const Small = props => <FunctionalSmall { ...props }>{props.children}</FunctionalSmall>;

export default Small;
