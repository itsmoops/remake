
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalLine = styled.line`
    ${props => getStyleProps(props)}
`;

const Line = props => {
    return (
        <FunctionalLine { ...props }>
            {props.children}
        </FunctionalLine>
    )
};

export default Line;
  