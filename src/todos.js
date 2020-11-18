import { v4 as uuidv4 } from 'uuid';
import moment from "moment"

// Setup empty todos array
let todos = []

// loadTodos
// Arguments: none
// Return value: none

// read existing notes from localstorage
const loadTodos = () => localStorage.getItem("todos")

// saveTodos
// Arguments: none
// Return value: none

// save todos to local storage
const saveTodos = () => localStorage.setItem("todos")

// getTodos
// Arguments: none
// Return value: todos array

// Expose notes from module
const getTodos = () => notes


// createTodo
// Arguments: todo text
// Return value: none

const createTodo = (todoText) => {

  saveTodos()
}


// removeTodo
// Arguments: id of todo to remove
// Return value: none

// toggleTodo
// Arguments: id of todo to toggle
// Return value: none

// Make sure to call loadTodos and setup the exports

export { loadTodos, saveTodos, getTodos, createTodo, removeTodo, toggleTodo }