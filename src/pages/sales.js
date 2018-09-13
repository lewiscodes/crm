import React from 'react'

import Navigation from '../components/navigation'

const Sales = () => {
  return (
    <div>
      <Navigation pageName={'Sales'} contactMenuOpenOnLoad={false} />
      <div style={{marginTop: 64, marginLeft: 185}} >
        Sales
      </div>
    </div>
  )
}

export default Sales
