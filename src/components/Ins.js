
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalIns = styled.ins`
    ${props => getStyleProps(props)}
`;

const Ins = props => {
    return (
        <FunctionalIns { ...props }>
            {props.children}
        </FunctionalIns>
    )
};

export default Ins;
