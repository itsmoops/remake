
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalRect = styled.rect`
    ${props => getStyleProps(props)}
`;

const Rect = props => {
    return (
        <FunctionalRect { ...props }>
            {props.children}
        </FunctionalRect>
    )
};

export default Rect;
  