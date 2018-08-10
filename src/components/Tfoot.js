
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalTfoot = styled.tfoot`
    ${props => getStyleProps(props)}
`;

const Tfoot = props => {
    return (
        <FunctionalTfoot { ...props }>
            {props.children}
        </FunctionalTfoot>
    )
};

export default Tfoot;
  