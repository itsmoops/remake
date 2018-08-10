
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalEm = styled.em`
    ${props => getStyleProps(props)}
`;

const Em = props => {
    return (
        <FunctionalEm { ...props }>
            {props.children}
        </FunctionalEm>
    )
};

export default Em;
  