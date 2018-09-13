import React from 'react'

import Navigation from '../components/navigation'

const Dashboard = () => {
  return (
    <div>
      <Navigation pageName={'Dashboard'} contactMenuOpenOnLoad={false} />
      <div style={{marginTop: 64, marginLeft: 185}} >
        Dashboard
      </div>
    </div>
  )
}

export default Dashboard
