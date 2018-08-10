
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalSelect = styled.select`
    ${props => getStyleProps(props)}
`;

const Select = props => {
    return (
        <FunctionalSelect { ...props }>
            {props.children}
        </FunctionalSelect>
    )
};

export default Select;
  