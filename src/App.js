import React from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList'
import Filters from './components/Filters'
import SearchCep from './components/SearchCep'

const App = () => (
  <div>
    <Form />
    <TodoList />
    <Filters />
    <hr />
    <SearchCep />
  </div>
)

export default App
