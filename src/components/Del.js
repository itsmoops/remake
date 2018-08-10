
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalDel = styled.del`
    ${props => getStyleProps(props)}
`;

const Del = props => {
    return (
        <FunctionalDel { ...props }>
            {props.children}
        </FunctionalDel>
    )
};

export default Del;
