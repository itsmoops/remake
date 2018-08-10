
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

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
  