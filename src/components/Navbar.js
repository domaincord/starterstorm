import React, {useContext} from 'react'
import { MenuProvider, MenuContext } from './MenuContext'
import styled from 'styled-components'
import Logo from './Logo'
import NavLinks from './Navigation'
import DiscordButton from './DiscordButton'

const StyledNavbar = styled.div`
  width: 100%;
  height: 70px;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
`

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1200px) {
    width: 90%;
  }
`

const NavGroup = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;

  .discord-cta {
    margin-left: 25px;
  }
`

const StyledDrawer = styled.div`
  background-color: #333;
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
`

const MenuButton = styled.div`
  width: 70px;
  height: 70px;
  display: none;
  justify-content: center;
  align-items: center;
  background: none;

  span {
    width: 30px;
    height: 2px;
    background-color: white;

    &:nth-of-type(2) {
      width: 20px;
    }
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }
`

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  width: 30px;
  height: 25px;
`

const Navbar = ({ onHero = true }) => {

  const { active, setActive } = useContext(MenuContext)

  const toggleDrawer = () => {
    return setActive(!active)
  }

  return (
    <MenuProvider>
      <StyledNavbar
        style={{ 
          backgroundColor: onHero ? 'rgba(0,0,0,0.5)' : '#252525',
          transform: active ? `translateX(-300px)` : 'unset' 
        }}
      >
        <Wrap>
          <Logo withText />
          <NavGroup>
            <NavLinks />
            <MenuButton role="button" onClick={toggleDrawer}>
                <Stack>
                  <span></span>
                  <span></span>
                  <span></span>
                </Stack>
            </MenuButton>
            <DiscordButton url="/discord" />
          </NavGroup>
        </Wrap>
      </StyledNavbar>
      {active ? (
        <StyledDrawer className="mobile-drawer">
          <NavLinks drawer />
        </StyledDrawer>
      ) : null}
    </MenuProvider>
  )
}

export default Navbar
