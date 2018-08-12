
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalArea = styled.area`
    ${props => formatStyles(props)};
`;

const Area = props => <FunctionalArea { ...props }>{props.children}</FunctionalArea>;

export default Area;
