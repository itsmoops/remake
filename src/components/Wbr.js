
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalWbr = styled.wbr`
    ${props => getStyleProps(props)}
`;

const Wbr = props => {
    return (
        <FunctionalWbr { ...props }>
            {props.children}
        </FunctionalWbr>
    )
};

export default Wbr;
  