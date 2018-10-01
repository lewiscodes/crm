import React from 'react'

import Navigation from '../components/navigation'

const Sales = () => {
  return (
    <div>
      <Navigation pageName={'Sales'} contactMenuOpenOnLoad={false} />
      <div style={{marginTop: 80, height: 0}} >
        Sales
      </div>
    </div>
  )
}

export default Sales
