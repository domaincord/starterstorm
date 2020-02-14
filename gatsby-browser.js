import React from 'react'
import { MenuProvider } from './src/components/MenuContext'

const wrapRootElement = ({ element }) => {
  return <MenuProvider>{element}</MenuProvider>
}
export { wrapRootElement }
