
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalColgroup = styled.colgroup`
    ${props => getStyleProps(props)}
`;

const Colgroup = props => {
    return (
        <FunctionalColgroup { ...props }>
            {props.children}
        </FunctionalColgroup>
    )
};

export default Colgroup;
