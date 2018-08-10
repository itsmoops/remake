
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalImage = styled.image`
    ${props => getStyleProps(props)}
`;

const Image = props => {
    return (
        <FunctionalImage { ...props }>
            {props.children}
        </FunctionalImage>
    )
};

export default Image;
