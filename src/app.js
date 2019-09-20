import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from './redux-flow/actions'

const App = ({ todos, handleSubmit }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <input type='text' name='todo' />
      <button type='submit'>Enviar</button>
    </form>
    {todos.map(todo => (
      <ul>
        <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </li>
      </ul>))}
    <div>
      <a href='#'>Todos</a> | <a href='#'>Finalizados</a> | <a href='#'>Para Fazer</a>
    </div>
  </div>
)

const mapStateToProps = (state) => ({ todos: state })
const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (e) => {
    e.preventDefault()
    dispatch(addTodo(e.target.todo.value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
