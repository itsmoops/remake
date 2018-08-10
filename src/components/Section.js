
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalSection = styled.section`
    ${props => getStyleProps(props)}
`;

const Section = props => {
    return (
        <FunctionalSection { ...props }>
            {props.children}
        </FunctionalSection>
    )
};

export default Section;
  