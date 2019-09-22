import React from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList'
import Filters from './components/Filters'

const App = () => (
  <React.Fragment>
    <Form />
    <TodoList />
    <Filters />
  </React.Fragment>
)

export default App
