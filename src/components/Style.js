
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalStyle = styled.style`
    ${props => getStyleProps(props)}
`;

const Style = props => {
    return (
        <FunctionalStyle { ...props }>
            {props.children}
        </FunctionalStyle>
    )
};

export default Style;
  