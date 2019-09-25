import React, { PureComponent } from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import { updateAddress } from './actions'
import SearchCep from './SearchCep'

class SearchCepContainer extends PureComponent {
  state = { isFetching: false }

  handleSearchCep = async (e) => {
    e.preventDefault()
    this.setState({ isFetching: true })
    const response = await Axios
      .get(`http://apps.widenet.com.br/busca-cep/api/cep.json?code=${e.target.cep.value}`)
    this.props.updateAddress(response.data)
    this.setState({ isFetching: false })
  }

  render () {
    return (
      <SearchCep
        {...this.state}
        {...this.props.address}
        handleSearchCep={this.handleSearchCep}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  address: state.address
})

const mapDispatchToProps = (dispatch) => ({
  updateAddress: (address) => dispatch(updateAddress(address))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchCepContainer)
