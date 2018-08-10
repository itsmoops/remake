
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalDt = styled.dt`
    ${props => getStyleProps(props)}
`;

const Dt = props => {
    return (
        <FunctionalDt { ...props }>
            {props.children}
        </FunctionalDt>
    )
};

export default Dt;
  