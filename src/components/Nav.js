
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalNav = styled.nav`
    ${props => getStyleProps(props)}
`;

const Nav = props => {
    return (
        <FunctionalNav { ...props }>
            {props.children}
        </FunctionalNav>
    )
};

export default Nav;
  