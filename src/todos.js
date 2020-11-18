import { v4 as uuidv4 } from 'uuid';

// Setup empty todos array
let todos = []

// // read existing notes from localstorage
const loadTodos = () => {
  const todosJSON = localStorage.getItem("todos")

// prevents the app from crashing if the data from local storage isnt being read correctly
  try {
    todos = todosJSON ? JSON.parse(todosJSON) : []
  } catch (e) {
    todos = []
  }
}

// save todos to local storage
const saveTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos))
}

// Expose notes from module
const getTodos = () => todos

// Create new todo with timestamp, ID, and input text body
const createTodo = (todoText) => {
  const id = uuidv4()

  todos.push({
    id: id,
    text: todoText,
    completed: false,
  })
  saveTodos()
}

// remove Todo using X button
const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id)
  
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1)
    saveTodos()
  }
}

// change if todo completed or not using checkbox
const toggleTodo = (id) => {
  const todo = todos.find((todo) => todo.id === id)

  if (todo) {
    todo.completed = !todo.completed
    saveTodos()
  }
}

loadTodos()

// Setup the exports
export { loadTodos, saveTodos, getTodos, createTodo, removeTodo, toggleTodo }