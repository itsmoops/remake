
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalScript = styled.script`
    ${props => getStyleProps(props)}
`;

const Script = props => {
    return (
        <FunctionalScript { ...props }>
            {props.children}
        </FunctionalScript>
    )
};

export default Script;
