import uuid from 'uuid'
import { ADD_TODO } from './types'

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { id: uuid(), text }
})
