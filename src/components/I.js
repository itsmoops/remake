
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalI = styled.i`
    ${props => getStyleProps(props)}
`;

const I = props => {
    return (
        <FunctionalI { ...props }>
            {props.children}
        </FunctionalI>
    )
};

export default I;
  