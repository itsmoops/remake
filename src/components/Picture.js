
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalPicture = styled.picture`
    ${props => formatStyles(props)};
`;

const Picture = props => <FunctionalPicture { ...props }>{props.children}</FunctionalPicture>;

export default Picture;
