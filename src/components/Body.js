
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalBody = styled.body`
    ${props => getStyleProps(props)}
`;

const Body = props => {
    return (
        <FunctionalBody { ...props }>
            {props.children}
        </FunctionalBody>
    )
};

export default Body;
  