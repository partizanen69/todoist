import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

import * as routes from './constants/routes';
import Navigation from './components/Navigation/Navigation';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import SignInPage from './pages/SignInPage/SignInPage';
import UserTodoList from './pages/UserTodoList/UserTodoList';
import Account from './pages/Account/Account';
import PasswordForget from './pages/PasswordForget/PasswordForget';
import withAuthentication from './withAuthentication';

const App = () => (
    <Router>
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>Todoist ninja</title>
            </Helmet>
            <Navigation />
            <Grid>
                <Route
                    exact
                    path={routes.HOME}
                    component={HomePage}
                />
                <Route
                    exact
                    path={routes.SIGN_UP}
                    component={SignUpPage}
                />
                <Route
                    exact
                    path={routes.SIGN_IN}
                    component={SignInPage}
                />
                <Route
                    exact
                    path={routes.USER_TODO_LIST}
                    component={UserTodoList}
                />
                <Route
                    exact
                    path={routes.ACCOUNT}
                    component={Account}
                />
                <Route
                    exact
                    path={routes.PASSWORD_FORGET}
                    component={PasswordForget}
                />
            </Grid>
        </div>
    </Router>
);

export default withAuthentication(App);
