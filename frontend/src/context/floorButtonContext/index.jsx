import React, { createContext, useState } from 'react'

export const FloorMaterialContext = createContext()

export const FloorMaterialProvider = ({ children }) => {
  const [activeFloorBtn, setActiveFloorBtn] = useState(0)

  return (
    <FloorMaterialContext.Provider value={{ activeFloorBtn, setActiveFloorBtn }}>
      {children}
    </FloorMaterialContext.Provider>
  )
}