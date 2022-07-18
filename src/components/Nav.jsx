import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div className='d-flex align-items-right'>
        <Nav activeKey="/" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)} >
            <Nav.Item className="px-2">
                <NavLink to="/">Home</NavLink>
            </Nav.Item>
            <Nav.Item className="px-2">
                <NavLink to="/Login">Login</NavLink>
            </Nav.Item>
            <Nav.Item className="px-2">
                <NavLink to="/register">Register</NavLink>
            </Nav.Item>
            <Nav.Item className='px-2'>
                <NavLink to="/product">Products</NavLink>
            </Nav.Item>
        </Nav>
    </div>
  );
}

export default Navigation;
