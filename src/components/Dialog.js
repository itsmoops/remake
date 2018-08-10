
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalDialog = styled.dialog`
    ${props => getStyleProps(props)}
`;

const Dialog = props => {
    return (
        <FunctionalDialog { ...props }>
            {props.children}
        </FunctionalDialog>
    )
};

export default Dialog;
