import React from 'react'

import Navigation from '../components/navigation'
import ContactInfo from '../components/contactInfo'
import ContactData from '../components/contactData'

const Contact = () => {
  return (
    <div>
      <Navigation pageName={'Contact'} contactMenuOpenOnLoad />
      <div style={{marginTop: 120, height: 0, display: 'flex'}} >
        <ContactInfo />
        <ContactData />
      </div>
    </div>
  )
}

export default Contact
