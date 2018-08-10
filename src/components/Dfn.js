
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalDfn = styled.dfn`
    ${props => getStyleProps(props)}
`;

const Dfn = props => {
    return (
        <FunctionalDfn { ...props }>
            {props.children}
        </FunctionalDfn>
    )
};

export default Dfn;
