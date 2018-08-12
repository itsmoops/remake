
import React from 'react';
import styled from 'styled-components';
import { formatStyles } from '../helpers/helpers';

const FunctionalArticle = styled.article`
    ${props => formatStyles(props)};
`;

const Article = props => <FunctionalArticle { ...props }>{props.children}</FunctionalArticle>;

export default Article;
