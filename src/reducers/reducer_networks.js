import networksData from '../mockData/networks.json'

const INITIAL_STATE = networksData

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state
  }
}
