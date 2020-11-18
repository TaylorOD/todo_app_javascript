import { setFilters } from "./filters"
import { createTodo, loadTodos } from "./todos"
import { renderTodos } from "./views"

// Render initial todos
renderTodos()

// Set up search text handler
// // listens for input text changes and changes filters
document.querySelector("#search-text").addEventListener("input", (e) => {
  setFilters({
    searchText: e.target.value
  })
  renderTodos()
})

// // listens to checkbox - true or false
document.querySelector("#completed-checkbox").addEventListener("change", (e) => {
  setFilters({
    hideCompleted: e.target.checked
  })
  renderTodos()
})

// Set up form submission handler
// listens for new todo text and creates new note
document.querySelector("#new-todo-text-form").addEventListener("submit", (e) => {
  const text = e.target.elements.text.value.trim()

  e.preventDefault()
  if (text.length > 0) {
    createTodo(text)
    renderTodos()
    e.target.elements.text.value = ""
  }
})

// sync edit and index title storage
window.addEventListener("storage", (e) => {
  if (e.key === "todos") {
    loadTodos()
    renderTodos()
  }
})

