
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalEllipse = styled.ellipse`
    ${props => formatStyles(props)};
`;

const Ellipse = props => <FunctionalEllipse { ...props }>{props.children}</FunctionalEllipse>;

export default Ellipse;
