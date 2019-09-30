import Axios from 'axios'
import { UPDATE_ADDRESS, FETCHING_ADDRESS } from './types'

export const fetchAddress = (cep) => async (dispatch, getState) => {
  dispatch({ type: FETCHING_ADDRESS })
  const response = await Axios
    .get(`http://apps.widenet.com.br/busca-cep/api/cep.json?code=${cep}`)
  dispatch(updateAddress(response.data))
}

export const updateAddress = (address) => ({
  type: UPDATE_ADDRESS,
  payload: address
})
