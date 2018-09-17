import React from 'react'

import CompanyContactTable from '../components/companyContactTable'
import Navigation from '../components/navigation'

const CompaniesContacts = () => {
  return (
    <div>
      <Navigation pageName={'Contacts - Companies'} contactMenuOpenOnLoad />
      <div style={{marginTop: 120, height: 0}} >
        <CompanyContactTable />
      </div>
    </div>
  )
}

export default CompaniesContacts
