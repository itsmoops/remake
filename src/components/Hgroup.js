
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalHgroup = styled.hgroup`
    ${props => getStyleProps(props)}
`;

const Hgroup = props => {
    return (
        <FunctionalHgroup { ...props }>
            {props.children}
        </FunctionalHgroup>
    )
};

export default Hgroup;
