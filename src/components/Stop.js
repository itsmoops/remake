
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalStop = styled.stop`
    ${props => getStyleProps(props)}
`;

const Stop = props => {
    return (
        <FunctionalStop { ...props }>
            {props.children}
        </FunctionalStop>
    )
};

export default Stop;
