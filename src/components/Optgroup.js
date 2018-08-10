
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalOptgroup = styled.optgroup`
    ${props => getStyleProps(props)}
`;

const Optgroup = props => {
    return (
        <FunctionalOptgroup { ...props }>
            {props.children}
        </FunctionalOptgroup>
    )
};

export default Optgroup;
  