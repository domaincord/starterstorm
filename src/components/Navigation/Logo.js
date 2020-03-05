import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

const LogoGroup = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
`

const LogoImage = () => (
  <StaticQuery
    query={graphql`
      {
        file(relativePath: { eq: "icon.png" }) {
          childImageSharp {
            fixed(height: 50) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `}
    render={data => <Img fixed={data.file.childImageSharp.fixed} />}
  ></StaticQuery>
)

const Logo = ({ withText = false }) => (
  <LogoGroup>
    <Link to="/" style={{marginRight: withText ? 15 : 0}}>
      <LogoImage />
    </Link>
    {withText ? (
      <>
        <TextGroup>
          <div className="text-black font-normal text-lg">
            <strong>Starter</strong> Storm
          </div>
          <div className="text-gray-500 text-base">Innovation Within Reach.</div>
        </TextGroup>
      </>
    ) : null}
  </LogoGroup>
)

export default Logo
