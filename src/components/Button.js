
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalButton = styled.button`
    ${props => getStyleProps(props)}
`;

const Button = props => {
    return (
        <FunctionalButton { ...props }>
            {props.children}
        </FunctionalButton>
    )
};

export default Button;
