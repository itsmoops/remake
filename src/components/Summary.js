
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalSummary = styled.summary`
    ${props => getStyleProps(props)}
`;

const Summary = props => {
    return (
        <FunctionalSummary { ...props }>
            {props.children}
        </FunctionalSummary>
    )
};

export default Summary;
  