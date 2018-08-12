
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalMain = styled.main`
    ${props => formatStyles(props)};
`;

const Main = props => <FunctionalMain { ...props }>{props.children}</FunctionalMain>;

export default Main;
