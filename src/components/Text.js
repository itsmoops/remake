
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalText = styled.text`
    ${props => getStyleProps(props)}
`;

const Text = props => {
    return (
        <FunctionalText { ...props }>
            {props.children}
        </FunctionalText>
    )
};

export default Text;
