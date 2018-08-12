
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalImage = styled.image`
    ${props => formatStyles(props)};
`;

const Image = props => <FunctionalImage { ...props }>{props.children}</FunctionalImage>;

export default Image;
