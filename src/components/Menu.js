
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalMenu = styled.menu`
    ${props => getStyleProps(props)}
`;

const Menu = props => {
    return (
        <FunctionalMenu { ...props }>
            {props.children}
        </FunctionalMenu>
    )
};

export default Menu;
  