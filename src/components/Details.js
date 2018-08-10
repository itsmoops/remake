
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalDetails = styled.details`
    ${props => getStyleProps(props)}
`;

const Details = props => {
    return (
        <FunctionalDetails { ...props }>
            {props.children}
        </FunctionalDetails>
    )
};

export default Details;
