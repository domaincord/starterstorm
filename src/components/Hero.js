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
  width: 60%;
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
        <h1>Looking to promote your stuff?</h1>
        <small>
          <strong>Discuss</strong> business strategies, <strong>network</strong>{' '}
          with other entrepreneurs, and
          <strong> sell</strong> or <strong>promote</strong> your creative
          assets, services, and external communities.
        </small>
      </HeroText>
      <HeroImage />
    </StyledHero>
  )
}

export default Hero
