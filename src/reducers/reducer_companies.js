import companiesData from '../mockData/companies.json'

const INITIAL_STATE = companiesData

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state
  }
}
