import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Item from 'Components/Navigation/Item';

import { fetchStart as fetchNavigation } from 'Store/Actions/Categories';
const StyledNavigation = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
`

export class Navigation extends PureComponent {
    componentDidMount() {
        this.props.fetch();
    }
    renderItem(item, idx) {
        return (
            <Item key={idx} {...item} />
        )
    }
    render() {
        return (
            <StyledNavigation>
                {this.props.topLevelItems.map(this.renderItem)}
            </StyledNavigation>
        );
    }
}


export default connect(
    ({ Categories, Navigation }) => ({
        topLevelItems: Navigation.map(id => Categories[id]).filter(item => item.parent === 0)
    }),
    (dispatch) => ({
        fetch: bindActionCreators(fetchNavigation, dispatch)
    })
)(Navigation);
