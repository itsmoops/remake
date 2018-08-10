
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalPolyline = styled.polyline`
    ${props => getStyleProps(props)}
`;

const Polyline = props => {
    return (
        <FunctionalPolyline { ...props }>
            {props.children}
        </FunctionalPolyline>
    )
};

export default Polyline;
