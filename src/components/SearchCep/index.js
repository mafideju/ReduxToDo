import React, { PureComponent } from 'react'
import Axios from 'axios'
import SearchCep from './SearchCep'

class SearchCepContainer extends PureComponent {
  state = {
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: 1,
    isFetching: false
  }

  handleSearchCep = async (e) => {
    e.preventDefault()
    this.setState({ isFetching: true })
    const response = await Axios
      .get(`http://apps.widenet.com.br/busca-cep/api/cep.json?code=${e.target.cep.value}`)
    this.setState(response.data)
    // e.target.cep.value = ''
    if (response.data.status === 0) {
      throw new Error(response.data.message)
    }
    console.log(response)
    this.setState({ isFetching: false })
  }

  render () {
    return (
      <SearchCep {...this.state} handleSearchCep={this.handleSearchCep} />
    )
  }
}

export default SearchCepContainer
