import React, { ReactNode } from 'react'

interface LayoutProps{
    children:ReactNode;
}
const layout = ({children}:LayoutProps) => {
  return (
    <div>
      this is about page layout
      {children}
    </div>
  )
}

export default layout
