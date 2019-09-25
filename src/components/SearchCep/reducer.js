import { UPDATE_ADDRESS } from './types'

export const initialState = {
  address: '',
  city: '',
  code: '',
  district: '',
  state: '',
  status: 1
}

const address = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ADDRESS:
      return action.payload
  }
  return state
}

export default address
