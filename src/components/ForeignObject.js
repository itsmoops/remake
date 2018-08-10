
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalForeignObject = styled.foreignObject`
    ${props => getStyleProps(props)}
`;

const ForeignObject = props => {
    return (
        <FunctionalForeignObject { ...props }>
            {props.children}
        </FunctionalForeignObject>
    )
};

export default ForeignObject;
  