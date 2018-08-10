
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalMeta = styled.meta`
    ${props => getStyleProps(props)}
`;

const Meta = props => {
    return (
        <FunctionalMeta { ...props }>
            {props.children}
        </FunctionalMeta>
    )
};

export default Meta;
  