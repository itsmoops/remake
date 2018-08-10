
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalInput = styled.input`
    ${props => getStyleProps(props)}
`;

const Input = props => {
    return (
        <FunctionalInput { ...props }>
            {props.children}
        </FunctionalInput>
    )
};

export default Input;
  