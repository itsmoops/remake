
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalEmbed = styled.embed`
    ${props => getStyleProps(props)}
`;

const Embed = props => {
    return (
        <FunctionalEmbed { ...props }>
            {props.children}
        </FunctionalEmbed>
    )
};

export default Embed;
