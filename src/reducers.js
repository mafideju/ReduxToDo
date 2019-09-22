import { combineReducers } from 'redux'
import reducerTodos from './redux-flow'
import reducerFilters from './filters'

// export const rootReducer = (state = {}, action) => {
//   return {
//     todos: reducerTodos(state.todos, action),
//     filters: reducerFilters(state.filters, action)
//   }
// }

export default combineReducers({
  todos: reducerTodos,
  filters: reducerFilters
})
