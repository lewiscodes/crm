import { combineReducers } from 'redux'
import CompaniesReducer from './reducer_companies'
import ContactsReducer from './reducer_contacts'
import NetworksReducer from './reducer_networks'
import UserReducer from './reducer_user'

const rootReducer = combineReducers({
  companies: CompaniesReducer,
  contacts: ContactsReducer,
  networks: NetworksReducer,
  user: UserReducer
})

export default rootReducer
