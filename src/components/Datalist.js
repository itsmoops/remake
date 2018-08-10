
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/helpers';

const FunctionalDatalist = styled.datalist`
    ${props => getStyleProps(props)}
`;

const Datalist = props => {
    return (
        <FunctionalDatalist { ...props }>
            {props.children}
        </FunctionalDatalist>
    )
};

export default Datalist;
  