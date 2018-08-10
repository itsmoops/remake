
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalMap = styled.map`
    ${props => getStyleProps(props)}
`;

const Map = props => {
    return (
        <FunctionalMap { ...props }>
            {props.children}
        </FunctionalMap>
    )
};

export default Map;
  