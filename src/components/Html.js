
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalHtml = styled.html`
    ${props => getStyleProps(props)}
`;

const Html = props => {
    return (
        <FunctionalHtml { ...props }>
            {props.children}
        </FunctionalHtml>
    )
};

export default Html;
  