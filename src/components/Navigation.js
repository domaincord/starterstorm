import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

const PrimaryNav = styled.nav`
  flex: auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;

  a {
    display: block;
    padding: 26px 15px;
    text-decoration: none;
    color: white;
    font-weight: 300;
    position: relative;
  }

  .active {
    color: #ef8100;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const DrawerNav = styled.nav`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  a {
    display: block;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    text-decoration: none;
    color: white;
    font-weight: 300;

    i {
      margin-left: 25px;
    }

    &:hover {
      background-color: #3c4043;
    }
  }

  .active {
    color: #ef8100;
  }
`

const MenuLinks = () => (
  <>
    <Link to="/" activeClassName="active">
      Home
    </Link>
    <Link to="/community-info" activeClassName="active">
      Community Info
    </Link>
  </>
)

const Navigation = ({ drawer }) => {
  return (
    <>
      {drawer ? (
        <DrawerNav>
          <MenuLinks />
        </DrawerNav>
      ) : (
        <PrimaryNav>
          <MenuLinks />
        </PrimaryNav>
      )}
    </>
  )
}

Navigation.propTypes = {
  drawer: PropTypes.bool,
}

export default Navigation
