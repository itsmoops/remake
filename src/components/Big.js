
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalBig = styled.big`
    ${props => getStyleProps(props)}
`;

const Big = props => {
    return (
        <FunctionalBig { ...props }>
            {props.children}
        </FunctionalBig>
    )
};

export default Big;
