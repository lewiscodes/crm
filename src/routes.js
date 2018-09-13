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
  <Route path='/' component={App} >
    <IndexRoute component={Dashboard} />
    <Route path='/company' component={CompaniesContacts} />
    <Route path='/contact' component={Contact} />
    <Route path='/network' component={NetworkContacts} />
    <Route path='/events' component={Events} />
    <Route path='/reports' component={Reports} />
    <Route path='/sales' component={Sales} />
  </Route>
)
