
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalFieldset = styled.fieldset`
    ${props => formatStyles(props)};
`;

const Fieldset = props => <FunctionalFieldset { ...props }>{props.children}</FunctionalFieldset>;

export default Fieldset;
