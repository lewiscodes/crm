import contactsData from '../mockData/contacts.json'

const INITIAL_STATE = contactsData

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state
  }
}
