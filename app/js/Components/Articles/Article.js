import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { fetchSingle } from 'Store/Actions/Articles';
import ArticleQueueItem from 'Components/Articles/ArticleQueueItem';

const StyledArticle = styled.article`
`;
const StyledTitle = styled.h2`
    font-size: 24pt;
`

export class ArticleList extends PureComponent {
    componentDidMount() {
        this.props.fetchSingle(this.props.id);
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.id !== this.props.id) {
            this.props.fetchSingle(nextProps.id);
        }
    }
    renderTitle(title) {
        if(typeof title === 'object' && title.rendered) {
            return title.rendered;
        }
        return null;
    }
    render() {
        return (
            <StyledArticle>
                <StyledTitle>{this.renderTitle(this.props.title)}</StyledTitle>
            </StyledArticle>
        );
    }
}

export default connect(
    ({ Articles }, { id }) => {
        return {
            ...(Articles[id] ? Articles[id] : {})
        };
    },
    (dispatch) => ({
        fetchSingle: bindActionCreators(fetchSingle, dispatch)
    }), (propsFromState, propsFromDispatch, ownProps) => ({
        ...propsFromState,
        ...propsFromDispatch,
        id: parseInt(propsFromState.id || ownProps.id)
    })
)(ArticleList)
