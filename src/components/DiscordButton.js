import React from 'react'
import styled from 'styled-components'

import discordLogo from '../images/Discord-Logo-White.svg'

const Button = styled.a`
  width: auto;
  height: 30px;
  line-height: 30px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 5px 15px;
  background-color: #7289da;
  border-radius: 8px;
  color: white;
  text-decoration: none;
  font-size: 0.75rem;
  margin-right: 25px;

  img {
    width: 20px;
    height: auto;
    margin-right: 15px;
  }

  @media screen and (max-width: 768px) {
    margin-right: 0;

    img {
      margin-right: 0;
    }

    span {
      display: none;
    }
  }
`

const DiscordButton = ({ isSSO, url }) => (
  <Button href={url} className="discord-cta">
    <img src={discordLogo} alt="discord logo" />{' '}
    <span>{isSSO ? 'Sign in with Discord' : 'Join the Discord'}</span>
  </Button>
)

export default DiscordButton
