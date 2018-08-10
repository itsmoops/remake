
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalPath = styled.path`
    ${props => getStyleProps(props)}
`;

const Path = props => {
    return (
        <FunctionalPath { ...props }>
            {props.children}
        </FunctionalPath>
    )
};

export default Path;
  