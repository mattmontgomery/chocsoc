import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router'
import styled from 'styled-components';

import Header from './Header';
import ArticleList from 'Components/Articles/ArticleList';
import Article from 'Components/Articles/Article';

const AppStyled = styled.section`
    font-family: 'Arial';
    display: flex;
    flex-direction: column;
`
const StyledBody = styled.div`
    padding: 1rem;
    display: flex;
    @media(max-width: 800px) {
        flex-direction: column-reverse;
    }
`

const Main = styled.div`
    flex: 4;
`;

const Sidebar = styled.div`
    margin-left: 1rem;
    min-width: 20rem;
    background: #2C4770;
    @media(max-width: 800px) {
        margin: 0 0 1rem 0;
    }
`
const SidebarItem = styled.div`
    padding: 1rem;
    background-color: #4D658D;
    color: white;
    margin: 1rem;
`

export default class App extends PureComponent {
    render() {
        return (
            <AppStyled>
                <Header />
                <StyledBody>
                    <Main>
                        <Switch>
                            <Route exact path="/" component={ArticleList} />
                            <Route
                                path="/posts/:id/:slug"
                                render={({ match: { params: { id }} }) => {
                                    return <ArticleList categoryId={id} />;
                                }}
                            />
                            <Route
                                path="/post/:id/:slug"
                                render={({ match: { params: { id }} }) => {
                                    return <Article id={id} />
                                }}
                            />
                        </Switch>
                    </Main>
                    <Sidebar>
                        <SidebarItem>
                            {'sidebar content one'}
                        </SidebarItem>
                        <SidebarItem>
                            {'sidebar content two'}
                        </SidebarItem>
                        <SidebarItem>
                            {'sidebar content three'}
                        </SidebarItem>
                    </Sidebar>
            </StyledBody>
            </AppStyled>
        );
    }
}
