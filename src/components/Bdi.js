
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalBdi = styled.bdi`
    ${props => getStyleProps(props)}
`;

const Bdi = props => {
    return (
        <FunctionalBdi { ...props }>
            {props.children}
        </FunctionalBdi>
    )
};

export default Bdi;
  