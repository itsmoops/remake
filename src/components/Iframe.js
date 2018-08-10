
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalIframe = styled.iframe`
    ${props => getStyleProps(props)}
`;

const Iframe = props => {
    return (
        <FunctionalIframe { ...props }>
            {props.children}
        </FunctionalIframe>
    )
};

export default Iframe;
