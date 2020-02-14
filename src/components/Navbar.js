import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import NavLinks from './Navigation'
import DiscordButton from './DiscordButton'

const StyledNavbar = styled.div`
    width: 100%;
    height: 70px;
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

const Navbar = ({onHero = true}) => {

    return (
        <StyledNavbar style={{backgroundColor: onHero ? 'rgba(0,0,0,0.5)' : '#252525'}}>
            <Wrap>
                <Logo withText />
                <NavGroup>
                    <NavLinks />
                    <DiscordButton url="/discord" />
                </NavGroup>
            </Wrap>
        </StyledNavbar>
    )
}

export default Navbar