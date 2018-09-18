import React from 'react'

import Navigation from '../components/navigation'
import ContactsTable from '../components/contactsTable'

const ContactsTablePage = () => {
  return (
    <div>
      <Navigation pageName={'Contacts - Search'} contactMenuOpenOnLoad />
      <div style={{marginTop: 120, height: 0}}>
        <ContactsTable />
      </div>
    </div>
  )
}

export default ContactsTablePage
