import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';
import SignOutButton from './SignOutButton'





const Navigation = ({ authUser }) => 
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        Todoist
      </Navbar.Brand>
    </Navbar.Header>
        {authUser ? <NavigationAuth /> : <NavigationNonAuth />}
        <button onClick={() => console.log(authUser)}>Click</button>
  </Navbar>

const NavigationAuth = () =>
  <div>
    <Link to={routes.LANDING}>Landing</Link>
    <Link to={routes.HOME}>Home</Link>
    <Link to={routes.ACCOUNT}>Account</Link>
    <SignOutButton />
  </div>

const NavigationNonAuth = () =>
  <div>
    <Link to={routes.LANDING}>Landing</Link>
    <Link to={routes.SIGN_IN}>Sign in</Link>
  </div>

export default Navigation;