
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalMask = styled.mask`
    ${props => formatStyles(props)};
`;

const Mask = props => <FunctionalMask { ...props }>{props.children}</FunctionalMask>;

export default Mask;
