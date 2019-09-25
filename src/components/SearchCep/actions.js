import { UPDATE_ADDRESS } from './types'

export const updateAddress = (address) => ({
  type: UPDATE_ADDRESS,
  payload: address
})
