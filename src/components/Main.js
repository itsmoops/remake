
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalMain = styled.main`
    ${props => getStyleProps(props)}
`;

const Main = props => {
    return (
        <FunctionalMain { ...props }>
            {props.children}
        </FunctionalMain>
    )
};

export default Main;
  