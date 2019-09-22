import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../redux-flow/actions'

const TodoList = ({ handleToggle, todos }) => {
  return (
    <React.Fragment>
      {todos.map(todo => (
        <ul>
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={handleToggle(todo.id)}
          >
            {todo.text}
          </li>
        </ul>))}
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({ todos: state.todos })

const mapDispatchToProps = (dispatch) => ({
  handleToggle: (id) => (e) => {
    dispatch(toggleTodo(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
