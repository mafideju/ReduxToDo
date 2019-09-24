import { expect as expectChai } from 'chai';
import deepFreeze from 'deep-freeze'
import address, { initialState } from './reducer';
import { UPDATE_ADDRESS } from './types'

describe('API DO CEP', () => {
  it('API DO CEP DEVE SER UMA FUNÇÃO', () => {
    expectChai(address).to.be.a('function')
  })

  it('UPDATE_ADDRESS SHOULD DO HIS JOB', () => {
    const before = deepFreeze({
      address: '',
      city: '',
      code: '',
      district: '',
      state: '',
      status: 1,
      isFetching: false
    })
    const action = deepFreeze({
      type: UPDATE_ADDRESS,
      payload: {
        address: 'Rua dos Migrantes (Jd N Horizonte I)',
        city: 'São Bernardo do Campo',
        code: '09782-030',
        district: 'Ferrazópolis',
        state: 'SP',
        status: 1,
        isFetching: false
      }
    })
    const after = {
      address: 'Rua dos Migrantes (Jd N Horizonte I)',
      city: 'São Bernardo do Campo',
      code: '09782-030',
      district: 'Ferrazópolis',
      state: 'SP',
      status: 1,
      isFetching: false
    }
    expectChai(address(before, action)).to.be.deep.equal(after)
  })
})
