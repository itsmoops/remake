
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalLi = styled.li`
    ${props => getStyleProps(props)}
`;

const Li = props => {
    return (
        <FunctionalLi { ...props }>
            {props.children}
        </FunctionalLi>
    )
};

export default Li;
  