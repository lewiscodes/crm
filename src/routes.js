import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App'
import Dashboard from './pages/dashboard'
import CompaniesContacts from './pages/contact_companies'
import Contact from './pages/contact_contacts'
import NetworkContacts from './pages/contact_networks'
import Events from './pages/events'
import Reports from './pages/reports'
import Sales from './pages/sales'

export default (
  <Route path='/crm/' component={App} >
    <IndexRoute component={Dashboard} />
    <Route path='/crm/company' component={CompaniesContacts} />
    <Route path='/crm/contact' component={Contact} />
    <Route path='/crm/network' component={NetworkContacts} />
    <Route path='/crm/events' component={Events} />
    <Route path='/crm/reports' component={Reports} />
    <Route path='/crm/sales' component={Sales} />
  </Route>
)
