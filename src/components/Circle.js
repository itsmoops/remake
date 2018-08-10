
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalCircle = styled.circle`
    ${props => getStyleProps(props)}
`;

const Circle = props => {
    return (
        <FunctionalCircle { ...props }>
            {props.children}
        </FunctionalCircle>
    )
};

export default Circle;
  