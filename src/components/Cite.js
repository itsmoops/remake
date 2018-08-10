
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalCite = styled.cite`
    ${props => getStyleProps(props)}
`;

const Cite = props => {
    return (
        <FunctionalCite { ...props }>
            {props.children}
        </FunctionalCite>
    )
};

export default Cite;
