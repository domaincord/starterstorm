import React from 'react'
import styled from 'styled-components'
import HeroImage from './HeroImage'
import Navbar from './Navbar'

const StyledHero = styled.div`
    width: 100%;
    height: 400px;
    position: relative;
`

const HeroText = styled.div`
    width: 100%;
    position: absolute;
    display: block;
    top: 50%;
    transform: translateY(-50%);
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
`

const Hero = () => {

    return (
        <StyledHero>
            <Navbar />
            <HeroText>
                <h1>The Entrepreneur's Playground</h1>
                <small>Discuss business strategies, network with other entrepreneurs, and sell or promote your creative assets and services on Starter Storm.</small>
            </HeroText>
            <HeroImage />
        </StyledHero>
    )
}

export default Hero