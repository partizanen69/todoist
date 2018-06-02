import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Grid } from 'react-bootstrap';

import * as routes from '../constants/routes';
import Navigation from './Navigation/Navigation';
import LandingPage from './LandingPage';
import SignUpPage from './SignUpPage';
import SignInPage from './SignInPage';
import UserTodoList from './UserTodoList';
import Account from './Account';
import PasswordForget from './PasswordForget';
import withAuthentication from './withAuthentication';

const App = () => (
    <Router>
        <div>
            <Navigation />
            <Grid>
                <Route exact path={routes.LANDING} component={LandingPage} />
                <Route exact path={routes.SIGN_UP} component={SignUpPage} />
                <Route exact path={routes.SIGN_IN} component={SignInPage} />
                <Route exact path={routes.USER_TODO_LIST} component={UserTodoList} />
                <Route exact path={routes.ACCOUNT} component={Account} />
                <Route exact path={routes.PASSWORD_FORGET} component={PasswordForget} />
            </Grid>
        </div>
    </Router>
);

export default withAuthentication(App);
