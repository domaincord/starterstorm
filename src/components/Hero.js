import React from 'react'
import styled from 'styled-components'
import HeroImage from './HeroImage'
import Navbar from './Navbar'

const StyledHero = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeroText = styled.div`
  width: 100%;
  height: auto;
  display: block;
  text-align: center;
  color: white;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  small {
    font-size: 1.25rem;
    font-weight: 300;
  }

  @media screen and (max-width: 1200px) {
    width: 90%;

    h1 {
      font-size: 1.5rem;
    }

    small {
      font-size: 0.75rem;
    }
  }
`

const Hero = () => {
  return (
    <StyledHero>
      <Navbar />
      <HeroText>
        <h1>The Entrepreneur's Playground</h1>
        <small>
          Discuss business strategies, network with other entrepreneurs, and
          sell or promote your creative assets and services on Starter Storm.
        </small>
      </HeroText>
      <HeroImage />
    </StyledHero>
  )
}

export default Hero
