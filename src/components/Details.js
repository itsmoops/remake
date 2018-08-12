
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalDetails = styled.details`
    ${props => formatStyles(props)};
`;

const Details = props => <FunctionalDetails { ...props }>{props.children}</FunctionalDetails>;

export default Details;
