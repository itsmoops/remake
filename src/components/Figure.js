
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalFigure = styled.figure`
    ${props => getStyleProps(props)}
`;

const Figure = props => {
    return (
        <FunctionalFigure { ...props }>
            {props.children}
        </FunctionalFigure>
    )
};

export default Figure;
  