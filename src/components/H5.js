
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalH5 = styled.h5`
    ${props => getStyleProps(props)}
`;

const H5 = props => {
    return (
        <FunctionalH5 { ...props }>
            {props.children}
        </FunctionalH5>
    )
};

export default H5;
