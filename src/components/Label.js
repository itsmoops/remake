
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalLabel = styled.label`
    ${props => getStyleProps(props)}
`;

const Label = props => {
    return (
        <FunctionalLabel { ...props }>
            {props.children}
        </FunctionalLabel>
    )
};

export default Label;
  