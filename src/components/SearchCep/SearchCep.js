import React from 'react'

const SearchCep = ({
  address,
  city,
  code,
  district,
  state,
  status,
  onHandleSearchCep,
  isFetching
}) => {
  return (
    <div>
      <form onSubmit={onHandleSearchCep}>
        <input type='text' name='cep' />
        <button
          type='submit'
          disabled={isFetching}
        >
          {!isFetching ? 'Busca CEP' : 'Localizando...'}
        </button>
      </form>

      {status === 0 && (
        <div>
          <h3>CEP Não Encontrado</h3>
        </div>
      )}
      {status === 1 && (
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
              <td>{code}</td>
              <td>{address}</td>
              <td>{district}</td>
              <td>{city}</td>
              <td>{state}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  )
}

export default SearchCep
