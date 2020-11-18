import { v4 as uuidv4 } from 'uuid';
import moment from "moment"

// Setup empty todos array
let todos = []

// read existing notes from localstorage
const loadTodos = () => localStorage.getItem("todos")

// save todos to local storage
const saveTodos = () => localStorage.setItem("todos")

// Expose notes from module
const getTodos = () => notes

// Create new todo with timestamp, ID, and input text body
const createTodo = (todoText) => {
  const id = uuidv4()
  const timestamp = moment().valueOf()

  todos.push({
    id: id,
    body: todoText,
    createdAt: timestamp,
  })

  saveTodos()
}

// removeTodo
// Arguments: id of todo to remove
// Return value: none

// remove Todo using X button
const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id)

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1)
  }
}

// toggleTodo
// Arguments: id of todo to toggle
// Return value: none

// change if todo completed or not using checkbox
const toggleTodo = (id) => {
  const todo = todos.find((todo) => todo.id === id)

  if (todo) {
    todo.completed = !todo.completed
  }
}

todos = loadTodos()

// Setup the exports
export { loadTodos, saveTodos, getTodos, createTodo, removeTodo, toggleTodo }