
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalRp = styled.rp`
    ${props => getStyleProps(props)}
`;

const Rp = props => {
    return (
        <FunctionalRp { ...props }>
            {props.children}
        </FunctionalRp>
    )
};

export default Rp;
  