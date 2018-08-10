
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalUl = styled.ul`
    ${props => getStyleProps(props)}
`;

const Ul = props => {
    return (
        <FunctionalUl { ...props }>
            {props.children}
        </FunctionalUl>
    )
};

export default Ul;
  