
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalCaption = styled.caption`
    ${props => getStyleProps(props)}
`;

const Caption = props => {
    return (
        <FunctionalCaption { ...props }>
            {props.children}
        </FunctionalCaption>
    )
};

export default Caption;
