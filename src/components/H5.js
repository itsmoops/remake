
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalH5 = styled.h5`
    ${props => formatStyles(props)};
`;

const H5 = props => <FunctionalH5 { ...props }>{props.children}</FunctionalH5>;

export default H5;
