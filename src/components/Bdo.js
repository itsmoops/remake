
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalBdo = styled.bdo`
    ${props => getStyleProps(props)}
`;

const Bdo = props => {
    return (
        <FunctionalBdo { ...props }>
            {props.children}
        </FunctionalBdo>
    )
};

export default Bdo;
