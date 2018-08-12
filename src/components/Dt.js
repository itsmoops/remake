
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalDt = styled.dt`
    ${props => formatStyles(props)};
`;

const Dt = props => <FunctionalDt { ...props }>{props.children}</FunctionalDt>;

export default Dt;
