import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const HeroImage = () => (
  <StaticQuery
    query={graphql`
      {
        file(relativePath: { eq: "jeremy-bishop-td7G4W1HSIE-unsplash.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2560) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        fadeIn={true}
        fluid={data.file.childImageSharp.fluid}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          overflow: 'hidden',
          width: '100%',
          height: 'inherit',
          zIndex: -1,
        }}
      />
    )}
  ></StaticQuery>
)

export default HeroImage
