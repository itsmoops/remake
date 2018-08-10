
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalPicture = styled.picture`
    ${props => getStyleProps(props)}
`;

const Picture = props => {
    return (
        <FunctionalPicture { ...props }>
            {props.children}
        </FunctionalPicture>
    )
};

export default Picture;
