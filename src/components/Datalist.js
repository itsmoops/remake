
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalDatalist = styled.datalist`
    ${props => formatStyles(props)};
`;

const Datalist = props => <FunctionalDatalist { ...props }>{props.children}</FunctionalDatalist>;

export default Datalist;
