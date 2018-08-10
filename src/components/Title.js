
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalTitle = styled.title`
    ${props => getStyleProps(props)}
`;

const Title = props => {
    return (
        <FunctionalTitle { ...props }>
            {props.children}
        </FunctionalTitle>
    )
};

export default Title;
