
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalMask = styled.mask`
    ${props => getStyleProps(props)}
`;

const Mask = props => {
    return (
        <FunctionalMask { ...props }>
            {props.children}
        </FunctionalMask>
    )
};

export default Mask;
  