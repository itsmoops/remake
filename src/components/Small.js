
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalSmall = styled.small`
    ${props => getStyleProps(props)}
`;

const Small = props => {
    return (
        <FunctionalSmall { ...props }>
            {props.children}
        </FunctionalSmall>
    )
};

export default Small;
