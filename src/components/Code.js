
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalCode = styled.code`
    ${props => getStyleProps(props)}
`;

const Code = props => {
    return (
        <FunctionalCode { ...props }>
            {props.children}
        </FunctionalCode>
    )
};

export default Code;
