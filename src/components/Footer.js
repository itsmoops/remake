
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalFooter = styled.footer`
    ${props => getStyleProps(props)}
`;

const Footer = props => {
    return (
        <FunctionalFooter { ...props }>
            {props.children}
        </FunctionalFooter>
    )
};

export default Footer;
