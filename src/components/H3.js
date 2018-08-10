
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalH3 = styled.h3`
    ${props => getStyleProps(props)}
`;

const H3 = props => {
    return (
        <FunctionalH3 { ...props }>
            {props.children}
        </FunctionalH3>
    )
};

export default H3;
  