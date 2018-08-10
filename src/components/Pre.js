
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalPre = styled.pre`
    ${props => getStyleProps(props)}
`;

const Pre = props => {
    return (
        <FunctionalPre { ...props }>
            {props.children}
        </FunctionalPre>
    )
};

export default Pre;
  