
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalTitle = styled.title`
    ${props => formatStyles(props)};
`;

const Title = props => <FunctionalTitle { ...props }>{props.children}</FunctionalTitle>;

export default Title;
