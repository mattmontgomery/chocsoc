import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { fetchStart } from 'Store/Actions/Articles';
import ArticleQueueItem from 'Components/Articles/ArticleQueueItem';

const StyledArticleList = styled.div`
    padding: 1rem;
`;

export class ArticleList extends PureComponent {
    constructor(props) {
        super(props);
        this.renderArticle = ::this.renderArticle;
    }
    renderArticle(article, idx) {
        return (
            <ArticleQueueItem key={idx} {...article} />
        );
    }
    componentDidMount() {
        this.props.fetchStart(this.props.categoryId);
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.categoryId !== this.props.categoryId) {
            this.props.fetchStart(nextProps.categoryId);
        }
    }
    render() {
        return (
            <StyledArticleList>
                <h3>{'Articles'}</h3>
                {this.props.articles.map(this.renderArticle)}
            </StyledArticleList>
        );
    }
}

export default connect(
    ({ Articles, ArticleList }, { categoryId }) => {
        return {
            articles: ArticleList
                .map(id => Articles[id])
                .filter(
                    ({ categories }) => !!categoryId ? categories.indexOf(parseInt(categoryId)) > -1 : true
                )
        };
    },
    (dispatch) => ({
        fetchStart: bindActionCreators(fetchStart, dispatch)
    })
)(ArticleList)
