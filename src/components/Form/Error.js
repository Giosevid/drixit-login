import React from 'react'

const Error = ({ children }) => {
  return (
    <div style={{ color:'red', mnarginTop:'0.5rem' }}>
      {children}
    </div>
  )
}

export default Error