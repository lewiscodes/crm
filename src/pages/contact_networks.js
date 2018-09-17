import React from 'react'

import Navigation from '../components/navigation'
import NetworkContactTable from '../components/networkContactTable'

const NetworkContacts = () => {
  return (
    <div>
      <Navigation pageName={'Contacts - Network'} contactMenuOpenOnLoad />
      <div style={{marginTop: 64, marginLeft: 185}}>
        <NetworkContactTable />
      </div>
    </div>
  )
}

export default NetworkContacts
