import React from 'react'
// import { connect } from 'react-redux'

const SearchCep = () => {
  return (
    <React.Fragment>
      <form>
        <input type='text' name='cep' />
        <button type='submit'>Busca CEP</button>
      </form>
      <table>
        <thead>
          <tr>
            <td>CEP</td>
            <td>ENDEREÇO</td>
            <td>BAIRRO</td>
            <td>CIDADE</td>
            <td>ESTADO</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0982030</td>
            <td>Rua Tal</td>
            <td>Jardim Tal</td>
            <td>São Paulo</td>
            <td>SP</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default SearchCep
