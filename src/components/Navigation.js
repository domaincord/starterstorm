import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Nav = styled.nav`
    width: auto;
    display: flex;

    a {
        color: white;
        display: block;
        padding: 25px 15px;

        &.active {
            color: #ef8100;
        }
    }
`

const NavLinks = () => (
    <Nav>
        <Link to="/" activeClassName="active">Home</Link>
        <Link to="/community-info" activeClassName="active">Community Info</Link>
    </Nav>
)

export default NavLinks