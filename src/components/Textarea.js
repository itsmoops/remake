
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalTextarea = styled.textarea`
    ${props => getStyleProps(props)}
`;

const Textarea = props => {
    return (
        <FunctionalTextarea { ...props }>
            {props.children}
        </FunctionalTextarea>
    )
};

export default Textarea;
