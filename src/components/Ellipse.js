
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalEllipse = styled.ellipse`
    ${props => getStyleProps(props)}
`;

const Ellipse = props => {
    return (
        <FunctionalEllipse { ...props }>
            {props.children}
        </FunctionalEllipse>
    )
};

export default Ellipse;
  