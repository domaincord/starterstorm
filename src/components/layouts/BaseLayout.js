import React from 'react'
import SEO from '../SEO'
import Navbar from '../Navbar'
import Hero from '../Hero'

import './reset.css'
import './layout.css'

const BaseLayout = ({ isHome, children }) => {
  return (
    <>
      <SEO description="This community is for budding entrepreneurs to discuss startup ideas and get feedback on their projects as well as for creative members to sell, market, and advertise their products, sites, and services." />
      {isHome ? <Hero /> : <Navbar onHero={false} />}
      <main className="page-wrapper">{children}</main>
    </>
  )
}

export default BaseLayout
