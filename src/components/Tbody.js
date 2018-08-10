
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalTbody = styled.tbody`
    ${props => getStyleProps(props)}
`;

const Tbody = props => {
    return (
        <FunctionalTbody { ...props }>
            {props.children}
        </FunctionalTbody>
    )
};

export default Tbody;
