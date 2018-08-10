
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalParam = styled.param`
    ${props => getStyleProps(props)}
`;

const Param = props => {
    return (
        <FunctionalParam { ...props }>
            {props.children}
        </FunctionalParam>
    )
};

export default Param;
