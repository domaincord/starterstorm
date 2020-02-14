import React, { createContext, useState } from 'react'

export const MenuContext = createContext({ active: false })

export const MenuProvider = ({ children }) => {
  const [active, setActive] = useState(false)
  return (
    <MenuContext.Provider value={{ active, setActive }}>
      {children}
    </MenuContext.Provider>
  )
}
