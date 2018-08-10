
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalTr = styled.tr`
    ${props => getStyleProps(props)}
`;

const Tr = props => {
    return (
        <FunctionalTr { ...props }>
            {props.children}
        </FunctionalTr>
    )
};

export default Tr;
  