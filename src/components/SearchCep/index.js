import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchAddress } from './actions'
import SearchCep from './SearchCep'

class SearchCepContainer extends PureComponent {
  handleSearchCep = (e) => {
    e.preventDefault()
    this.props.fetchAddress(e.target.cep.value)
  }

  render () {
    return (
      <SearchCep
        {...this.props.address}
        onHandleSearchCep={this.handleSearchCep}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  address: state.address
})

const mapDispatchToProps = (dispatch) => ({
  fetchAddress: (address) => dispatch(fetchAddress(address))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchCepContainer)
