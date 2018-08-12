
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalOptgroup = styled.optgroup`
    ${props => formatStyles(props)};
`;

const Optgroup = props => <FunctionalOptgroup { ...props }>{props.children}</FunctionalOptgroup>;

export default Optgroup;
