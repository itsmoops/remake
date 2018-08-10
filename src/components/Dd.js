
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalDd = styled.dd`
    ${props => getStyleProps(props)}
`;

const Dd = props => {
    return (
        <FunctionalDd { ...props }>
            {props.children}
        </FunctionalDd>
    )
};

export default Dd;
