
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalQ = styled.q`
    ${props => getStyleProps(props)}
`;

const Q = props => {
    return (
        <FunctionalQ { ...props }>
            {props.children}
        </FunctionalQ>
    )
};

export default Q;
  