import React from 'react'

import Navigation from '../components/navigation'
import ContactInfo from '../components/contactInfo'

const Contact = () => {
  return (
    <div>
      <Navigation pageName={'Contact'} contactMenuOpenOnLoad />
      <div style={{marginTop: 64, marginLeft: 185}} >
        <ContactInfo />
      </div>
    </div>
  )
}

export default Contact
