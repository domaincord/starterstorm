import React from 'react'
import SEO from '../SEO'
import { Bar as Navbar } from '../Navigation'

const BaseLayout = ({ children }) => {
  return (
    <>
      <SEO
        description="Discuss business strategies, network with other entrepreneurs, and
          sell or promote your creative assets, services, and external communities on Starter Storm."
      />
      <Navbar />
      <main className="container mx-auto px-4">{children}</main>
    </>
  )
}

export default BaseLayout
