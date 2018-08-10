
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalRt = styled.rt`
    ${props => getStyleProps(props)}
`;

const Rt = props => {
    return (
        <FunctionalRt { ...props }>
            {props.children}
        </FunctionalRt>
    )
};

export default Rt;
