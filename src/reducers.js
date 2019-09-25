import { combineReducers } from 'redux'
import reducerTodos from './components/TodoList/reducer'
import reducerFilters from './components/Filters/reducer'
import reducerAddress from './components/SearchCep/reducer'

// export const rootReducer = (state = {}, action) => {
//   return {
//     todos: reducerTodos(state.todos, action),
//     filters: reducerFilters(state.filters, action)
//   }
// }

export default combineReducers({
  todos: reducerTodos,
  filters: reducerFilters,
  address: reducerAddress
})
