
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalMenuitem = styled.menuitem`
    ${props => getStyleProps(props)}
`;

const Menuitem = props => {
    return (
        <FunctionalMenuitem { ...props }>
            {props.children}
        </FunctionalMenuitem>
    )
};

export default Menuitem;
  