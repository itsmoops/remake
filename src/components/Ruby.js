
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalRuby = styled.ruby`
    ${props => getStyleProps(props)}
`;

const Ruby = props => {
    return (
        <FunctionalRuby { ...props }>
            {props.children}
        </FunctionalRuby>
    )
};

export default Ruby;
  