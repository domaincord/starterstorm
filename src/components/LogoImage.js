import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

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

export default LogoImage
