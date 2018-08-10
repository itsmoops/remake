
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalP = styled.p`
    ${props => getStyleProps(props)}
`;

const P = props => {
    return (
        <FunctionalP { ...props }>
            {props.children}
        </FunctionalP>
    )
};

export default P;
  