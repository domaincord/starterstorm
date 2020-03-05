import React from 'react'
import SEO from '../SEO'

const HomeLayout = ({ children }) => {
  return (
    <>
      <SEO
        description="Discuss business strategies, network with other entrepreneurs, and
          sell or promote your creative assets, services, and external communities on Starter Storm."
      />
      {children}
    </>
  )
}

export default HomeLayout
