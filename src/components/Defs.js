
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalDefs = styled.defs`
    ${props => getStyleProps(props)}
`;

const Defs = props => {
    return (
        <FunctionalDefs { ...props }>
            {props.children}
        </FunctionalDefs>
    )
};

export default Defs;
