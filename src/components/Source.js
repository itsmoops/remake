
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalSource = styled.source`
    ${props => getStyleProps(props)}
`;

const Source = props => {
    return (
        <FunctionalSource { ...props }>
            {props.children}
        </FunctionalSource>
    )
};

export default Source;
