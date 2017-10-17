import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
const Item = styled.div`
    font-weight: bold;
`;

export default class ArticleQueueItem extends PureComponent {
    render() {
        return (
            <Item>
                <Link to={`/${this.props.type}/${this.props.id}/${this.props.slug}`}>
                    {this.props.title.rendered}
                </Link>
            </Item>
        );
    }
}
