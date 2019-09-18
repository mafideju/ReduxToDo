'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from './redux-flow/actions'

const App = ({ todos, handleSubmit }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <input type='text' name='todo' />
      <button type='submit'>Enviar</button>
    </form>
    {console.log(todos)}
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li style={{ textDecoration: 'line-through' }}>Item 3</li>
      <li>Item 4</li>
      <li>Item 5</li>
    </ul>
    <div>
      <a href='#'>Todos</a> | <a href='#'>Finalizados</a> | <a href='#'>Para Fazer</a>
    </div>
  </div>
)

const mapStateToProps = (state) => ({ todos: state })
const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (e) => {
    e.preventDefault()
    dispatch(addTodo('Hey'))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
