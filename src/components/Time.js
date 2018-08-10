
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalTime = styled.time`
    ${props => getStyleProps(props)}
`;

const Time = props => {
    return (
        <FunctionalTime { ...props }>
            {props.children}
        </FunctionalTime>
    )
};

export default Time;
