
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

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
