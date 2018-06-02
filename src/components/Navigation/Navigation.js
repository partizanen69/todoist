import React from 'react';
import { Grid, Row, Col, Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import * as routes from '../../constants/routes';
import SignOutButton from './SignOutButton';
import AuthUserContext from '../AuthUserContext';
import Styles from './Styles';

const Navigation = ({ authUser }) => (
  <Styles>
    <Row className="show-grid" bsClass="navbar navbar-default">
      <Grid>
        <Col sm={6}>
          <Navbar.Brand>Todoist</Navbar.Brand>
        </Col>
        <AuthUserContext.Consumer>
          {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
        </AuthUserContext.Consumer>
      </Grid>
    </Row>
  </Styles>
);

const NavigationAuth = () => (
  <Col sm={6}>
    <Link to={routes.LANDING}>Home</Link>
    <Link to={routes.USER_TODO_LIST}>Your todo list</Link>
    <Link to={routes.ACCOUNT}>Account</Link>
    <SignOutButton />
  </Col>
);

const NavigationNonAuth = () => (
  <Col sm={6}>
    <Link to={routes.LANDING}>Home</Link>
    <Link to={routes.SIGN_IN}>Sign in</Link>
  </Col>
);

export default Navigation;
