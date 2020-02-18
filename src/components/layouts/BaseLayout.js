import React from 'react'
import SEO from '../SEO'
import Navbar from '../Navbar'
import Hero from '../Hero'

import './reset.css'
import './layout.css'

const BaseLayout = ({ isHome, children }) => {
  return (
    <>
      <SEO description="Discuss business strategies, network with other entrepreneurs, and
          sell or promote your creative assets, services, and external communities on Starter Storm." />
      {isHome ? <Hero /> : <Navbar onHero={false} />}
      <main className="page-wrapper">{children}</main>
    </>
  )
}

export default BaseLayout
