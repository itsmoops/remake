
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalProgress = styled.progress`
    ${props => getStyleProps(props)}
`;

const Progress = props => {
    return (
        <FunctionalProgress { ...props }>
            {props.children}
        </FunctionalProgress>
    )
};

export default Progress;
