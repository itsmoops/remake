
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalImg = styled.img`
    ${props => getStyleProps(props)}
`;

const Img = props => {
    return (
        <FunctionalImg { ...props }>
            {props.children}
        </FunctionalImg>
    )
};

export default Img;
  