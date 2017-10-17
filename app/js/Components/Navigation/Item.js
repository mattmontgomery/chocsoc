import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchStart as fetchNavigation } from 'Store/Actions/Categories';
const StyledNavigation = styled.ul`
    list-style: none;
    padding: 0;
`
const StyledItem = styled.li`
    list-style: none;
    margin: 0 1rem 0 0;
    padding: 0;
`

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
`

export class Item extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }
    renderItem(item, idx) {
        return (
            <li key={idx}>
                <StyledLink to={`/posts/${item.id}/${item.slug}`}>
                    {item.name}
                </StyledLink>
            </li>
        )
    }
    render() {
        return (
            <StyledItem>
                <StyledLink to={`/posts/${this.props.id}/${this.props.slug}`}>
                    {this.props.name}
                </StyledLink>
                <StyledNavigation>
                    {this.props.items.map(this.renderItem)}
                </StyledNavigation>
            </StyledItem>
        );
    }
}


export default connect(
    ({ Categories, Navigation }, { id }) => ({
        items: Navigation.map(id => Categories[id]).filter(item => item.parent === id)
    }),
    (dispatch) => ({
        fetch: bindActionCreators(fetchNavigation, dispatch)
    })
)(Item);
