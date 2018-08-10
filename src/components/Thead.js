
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalThead = styled.thead`
    ${props => getStyleProps(props)}
`;

const Thead = props => {
    return (
        <FunctionalThead { ...props }>
            {props.children}
        </FunctionalThead>
    )
};

export default Thead;
  