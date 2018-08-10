
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalBlockquote = styled.blockquote`
    ${props => getStyleProps(props)}
`;

const Blockquote = props => {
    return (
        <FunctionalBlockquote { ...props }>
            {props.children}
        </FunctionalBlockquote>
    )
};

export default Blockquote;
  