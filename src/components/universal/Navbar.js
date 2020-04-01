import React, { useState } from 'react'
import {Collapse, 
        Navbar, 
        NavbarToggler, 
        NavbarBrand, 
        Nav, 
        NavItem, 
        NavLink 
} from 'reactstrap'



const NavBar = () => {
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => setCollapsed(!collapsed)

  return (
    <div className='p-2 m-1'>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto text-primary">Job Search App</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/news/">News</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/jobs/">Saved Jobs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/newsfeed/">Saved News</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
  }

export default NavBar