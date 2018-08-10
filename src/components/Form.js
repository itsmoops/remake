
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalForm = styled.form`
    ${props => getStyleProps(props)}
`;

const Form = props => {
    return (
        <FunctionalForm { ...props }>
            {props.children}
        </FunctionalForm>
    )
};

export default Form;
