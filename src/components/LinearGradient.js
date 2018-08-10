
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalLinearGradient = styled.linearGradient`
    ${props => getStyleProps(props)}
`;

const LinearGradient = props => {
    return (
        <FunctionalLinearGradient { ...props }>
            {props.children}
        </FunctionalLinearGradient>
    )
};

export default LinearGradient;
  