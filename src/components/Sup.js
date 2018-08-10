
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalSup = styled.sup`
    ${props => getStyleProps(props)}
`;

const Sup = props => {
    return (
        <FunctionalSup { ...props }>
            {props.children}
        </FunctionalSup>
    )
};

export default Sup;
  