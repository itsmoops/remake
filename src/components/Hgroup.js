
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalHgroup = styled.hgroup`
    ${props => formatStyles(props)};
`;

const Hgroup = props => <FunctionalHgroup { ...props }>{props.children}</FunctionalHgroup>;

export default Hgroup;
