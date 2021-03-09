import React, { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import authentication from '../../assets/img/authentication.png';
import { isLogin, logOut } from '../../utils/authHelpers';
import './navbar.css';

const OurNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar dark expand='md' className='header'>
      <NavbarBrand tag={Link} to={isLogin() ? '/dashboard' : '/'}>
        <img src={authentication} alt='' width='50px' />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar style={{ background: 'black' }}>
        {isLogin() ? (
          <>
            <Nav className='mr-auto' navbar>
              <NavItem>
                <NavLink
                  tag={Link}
                  className='font-weight-bold text-white'
                  activeClassName='current'
                  to='/dashboard'
                  exact
                >
                  Dashboard
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink
                  tag={Link}
                  className='text-danger'
                  activeClassName='current-danger'
                  to='/'
                  onClick={logOut}
                  exact
                >
                  Log Out
                </NavLink>
              </NavItem>
            </Nav>
          </>
        ) : (
          <>
            <Nav className='mr-auto' navbar>
              <NavItem>
                <NavLink
                  tag={Link}
                  className='font-weight-bold text-white'
                  activeClassName='current'
                  to='/'
                  exact
                >
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={Link}
                  className='font-weight-bold text-white'
                  activeClassName='current'
                  to='/register'
                >
                  Register
                </NavLink>
              </NavItem>
            </Nav>
          </>
        )}
      </Collapse>
    </Navbar>
  );
};

export default OurNavbar;
