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

export default class App extends PureComponent {
    render() {
        return (
            <AppStyled>
                <Header />
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
            </AppStyled>
        );
    }
}
