
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalFigcaption = styled.figcaption`
    ${props => getStyleProps(props)}
`;

const Figcaption = props => {
    return (
        <FunctionalFigcaption { ...props }>
            {props.children}
        </FunctionalFigcaption>
    )
};

export default Figcaption;
  