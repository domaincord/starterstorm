import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import LogoImage from './LogoImage'

const LogoGroup = styled.div`
  width: auto;
  max-width: 200px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`

const LogoLink = styled(Link)`
  margin-right: 15px;
`

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    color: white;
    font-weight: normal;
    font-size: 18px;
  }

  .slogan {
    color: white;
    font-weight: 300;
    font-size: 14px;
  }
`

const Logo = ({ withText = false }) => (
  <LogoGroup>
    <LogoLink to="/">
      <LogoImage />
    </LogoLink>
    {withText ? (
      <>
        <TextGroup>
          <div className="title">
            <strong>Starter</strong> Storm
          </div>
          <div className="slogan">Innovation Within Reach.</div>
        </TextGroup>
      </>
    ) : null}
  </LogoGroup>
)

export default Logo
