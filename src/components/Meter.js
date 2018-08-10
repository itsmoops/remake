
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalMeter = styled.meter`
    ${props => getStyleProps(props)}
`;

const Meter = props => {
    return (
        <FunctionalMeter { ...props }>
            {props.children}
        </FunctionalMeter>
    )
};

export default Meter;
