import React from 'react'

import Navigation from '../components/navigation'

const NetworkContacts = () => {
  return (
    <div>
      <Navigation pageName={'Contacts - Network'} contactMenuOpenOnLoad />
      <div style={{marginTop: 64, marginLeft: 185}} >
        Network Contacts
      </div>
    </div>
  )
}

export default NetworkContacts
