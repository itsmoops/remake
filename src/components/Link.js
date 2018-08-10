
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalLink = styled.link`
    ${props => getStyleProps(props)}
`;

const Link = props => {
    return (
        <FunctionalLink { ...props }>
            {props.children}
        </FunctionalLink>
    )
};

export default Link;
  