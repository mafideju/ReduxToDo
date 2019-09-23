import React from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList'
import Filters from './components/Filters'
import SearchCep from './components/SearchCep'

const App = () => (
  <React.Fragment>
    <Form />
    <TodoList />
    <Filters />
    <hr />
    <SearchCep />
  </React.Fragment>
)

export default App
