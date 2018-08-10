
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

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
