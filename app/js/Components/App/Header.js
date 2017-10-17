import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Navigation from 'Components/Navigation/Navigation';

const StyledHeader = styled.header`
    margin: 0 0 1rem 0;
    background: #AA8839;
    padding: 1rem;
    color: white;
`

const StyledPageTitle = styled.h1`
    font-size: 24pt;
    margin: 0 0 1rem 0;
`

export default class Header extends PureComponent {
    render() {
        return (
            <StyledHeader>
                <StyledPageTitle>{'Chocolate Society Online'}</StyledPageTitle>
                <Navigation />
            </StyledHeader>
        );
    }
}
