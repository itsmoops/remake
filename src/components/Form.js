
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalForm = styled.form`
    ${props => formatStyles(props)};
`;

const Form = props => <FunctionalForm { ...props }>{props.children}</FunctionalForm>;

export default Form;
