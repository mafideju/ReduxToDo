import { UPDATE_ADDRESS, FETCHING_ADDRESS } from './types'

export const initialState = {
  address: '',
  city: '',
  code: '',
  district: '',
  state: '',
  status: 1,
  isFetching: false
}

const address = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ADDRESS:
      return {
        ...action.payload,
        isFetching: false
      }
    case FETCHING_ADDRESS:
      return {
        ...state,
        isFetching: true
      }
  }
  return state
}

export default address
