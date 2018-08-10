
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalB = styled.b`
    ${props => getStyleProps(props)}
`;

const B = props => {
    return (
        <FunctionalB { ...props }>
            {props.children}
        </FunctionalB>
    )
};

export default B;
  