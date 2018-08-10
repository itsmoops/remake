
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalMarquee = styled.marquee`
    ${props => getStyleProps(props)}
`;

const Marquee = props => {
    return (
        <FunctionalMarquee { ...props }>
            {props.children}
        </FunctionalMarquee>
    )
};

export default Marquee;
