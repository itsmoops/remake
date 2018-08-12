
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalSection = styled.section`
    ${props => formatStyles(props)};
`;

const Section = props => <FunctionalSection { ...props }>{props.children}</FunctionalSection>;

export default Section;
