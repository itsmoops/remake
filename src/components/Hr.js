
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalHr = styled.hr`
    ${props => getStyleProps(props)}
`;

const Hr = props => {
    return (
        <FunctionalHr { ...props }>
            {props.children}
        </FunctionalHr>
    )
};

export default Hr;
