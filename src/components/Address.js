
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalAddress = styled.address`
    ${props => getStyleProps(props)}
`;

const Address = props => {
    return (
        <FunctionalAddress { ...props }>
            {props.children}
        </FunctionalAddress>
    )
};

export default Address;
