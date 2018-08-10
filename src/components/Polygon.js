
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalPolygon = styled.polygon`
    ${props => getStyleProps(props)}
`;

const Polygon = props => {
    return (
        <FunctionalPolygon { ...props }>
            {props.children}
        </FunctionalPolygon>
    )
};

export default Polygon;
  