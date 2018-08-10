
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalH6 = styled.h6`
    ${props => getStyleProps(props)}
`;

const H6 = props => {
    return (
        <FunctionalH6 { ...props }>
            {props.children}
        </FunctionalH6>
    )
};

export default H6;
  