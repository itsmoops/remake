
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalHeader = styled.header`
    ${props => getStyleProps(props)}
`;

const Header = props => {
    return (
        <FunctionalHeader { ...props }>
            {props.children}
        </FunctionalHeader>
    )
};

export default Header;
