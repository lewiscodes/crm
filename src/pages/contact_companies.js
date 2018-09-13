import React from 'react'

import Navigation from '../components/navigation'

const CompaniesContacts = () => {
  return (
    <div>
      <Navigation pageName={'Contacts - Companies'} contactMenuOpenOnLoad />
      <div style={{marginTop: 64, marginLeft: 185}} >
        Companies Contact
      </div>
    </div>
  )
}

export default CompaniesContacts
