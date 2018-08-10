
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalAside = styled.aside`
    ${props => getStyleProps(props)}
`;

const Aside = props => {
    return (
        <FunctionalAside { ...props }>
            {props.children}
        </FunctionalAside>
    )
};

export default Aside;
  