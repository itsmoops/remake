
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalPattern = styled.pattern`
    ${props => getStyleProps(props)}
`;

const Pattern = props => {
    return (
        <FunctionalPattern { ...props }>
            {props.children}
        </FunctionalPattern>
    )
};

export default Pattern;
  