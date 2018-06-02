import React from 'react';
import { Grid, Row, Col, Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import * as routes from '../../constants/routes';
import SignOutButton from './SignOutButton';
import AuthUserContext from '../AuthUserContext';
import Styles from './Styles';

const Navigation = ({ authUser }) => (
  <Styles>
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <LinkContainer to={routes.HOME}>
          <Navbar.Brand>Todo List</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <AuthUserContext.Consumer>
          {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
        </AuthUserContext.Consumer>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);

const NavigationAuth = () => (
  <Nav pullRight>
    <LinkContainer to={routes.USER_TODO_LIST}>
      <NavItem eventKey={2}>Your todo list</NavItem>
    </LinkContainer>
    <LinkContainer to={routes.ACCOUNT}>
      <NavItem eventKey={3}>Account</NavItem>
    </LinkContainer>
    <NavItem eventKey={4}>
      <SignOutButton />
    </NavItem>
  </Nav>
);

const NavigationNonAuth = () => (
  <Nav pullRight>
    <LinkContainer to={routes.SIGN_IN}>
      <NavItem eventKey={2}>Sign in</NavItem>
    </LinkContainer>
  </Nav>
);

export default Navigation;
