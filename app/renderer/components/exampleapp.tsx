import React from 'react'
import { Link } from 'react-router-dom'

const styles: React.CSSProperties = {
  marginTop: 100,
  textAlign: 'center'
}

export default () => (
  <div style={styles}>
    <h1>Electron + React + Vite</h1>
    <h3><Link to='/'>Back</Link></h3>
  </div>
)
