
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalImg = styled.img`
    ${props => formatStyles(props)};
`;

const Img = props => <FunctionalImg { ...props }>{props.children}</FunctionalImg>;

export default Img;
