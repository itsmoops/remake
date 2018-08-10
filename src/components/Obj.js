
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalObj = styled.object`
    ${props => getStyleProps(props)}
`;

const Obj = props => {
    return (
        <FunctionalObj { ...props }>
            {props.children}
        </FunctionalObj>
    )
};

export default Obj;
  