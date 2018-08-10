
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const FunctionalFieldset = styled.fieldset`
    ${props => getStyleProps(props)}
`;

const Fieldset = props => {
    return (
        <FunctionalFieldset { ...props }>
            {props.children}
        </FunctionalFieldset>
    )
};

export default Fieldset;
