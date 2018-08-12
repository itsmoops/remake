
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalMarquee = styled.marquee`
    ${props => formatStyles(props)};
`;

const Marquee = props => <FunctionalMarquee { ...props }>{props.children}</FunctionalMarquee>;

export default Marquee;
