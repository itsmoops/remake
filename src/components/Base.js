
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalBase = styled.base`
    ${props => getStyleProps(props)}
`;

const Base = props => {
    return (
        <FunctionalBase { ...props }>
            {props.children}
        </FunctionalBase>
    )
};

export default Base;
  