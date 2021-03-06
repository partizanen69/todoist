import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaUser, FaUserPlus, FaListOl } from 'react-icons/lib/fa/';

import * as routes from '../../constants/routes';
import SignOutButton from './SignOutButton';
import AuthUserContext from '../../AuthUserContext';
import Styles from './Styles';

const Navigation = ({ authUser }) => (
  <Styles>
    <Navbar collapseOnSelect fixedTop>
      <Navbar.Header>
        <LinkContainer to={routes.HOME}>
          <Navbar.Brand>Todo List</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <AuthUserContext.Consumer>
          {authUser =>
            authUser ? <NavigationAuth /> : <NavigationNonAuth />
          }
        </AuthUserContext.Consumer>
      </Navbar.Collapse>
    </Navbar>
    <div className="navigation-height" />
  </Styles>
);

const NavigationAuth = () => (
  <Nav pullRight>
    <LinkContainer to={routes.USER_TODO_LIST}>
      <NavItem eventKey={2}>
        <FaListOl /> Your todo list
      </NavItem>
    </LinkContainer>
    <LinkContainer to={routes.ACCOUNT}>
      <NavItem eventKey={3}>
        <FaUser /> Account
      </NavItem>
    </LinkContainer>
    <NavItem eventKey={4}>
      <SignOutButton />
    </NavItem>
  </Nav>
);

const NavigationNonAuth = () => (
  <Nav pullRight>
    <LinkContainer to={routes.SIGN_IN}>
      <NavItem eventKey={1}>
        <FaUser /> Sign in
      </NavItem>
    </LinkContainer>
    <LinkContainer to={routes.SIGN_UP}>
      <NavItem eventKey={2}>
        <FaUserPlus /> Sign up
      </NavItem>
    </LinkContainer>
  </Nav>
);

export default Navigation;
