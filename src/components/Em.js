
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalEm = styled.em`
    ${props => getStyleProps(props)}
`;

const Em = props => {
    return (
        <FunctionalEm { ...props }>
            {props.children}
        </FunctionalEm>
    )
};

export default Em;
