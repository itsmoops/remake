
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

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
  