
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalArea = styled.area`
    ${props => getStyleProps(props)}
`;

const Area = props => {
    return (
        <FunctionalArea { ...props }>
            {props.children}
        </FunctionalArea>
    )
};

export default Area;
