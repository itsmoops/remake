
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalEmbed = styled.embed`
    ${props => formatStyles(props)};
`;

const Embed = props => <FunctionalEmbed { ...props }>{props.children}</FunctionalEmbed>;

export default Embed;
