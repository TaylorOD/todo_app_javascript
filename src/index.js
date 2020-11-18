import { setFilters, getFilters } from "./filters"
import { loadTodos, saveTodos, getTodos, createTodo, removeTodo, toggleTodo } from "./todos"
import { renderTodos, generateTodoDOM, generateSummaryDOM } from "./views"

// Render initial todos - error

renderTodos()

// Set up search text handler
// // listens for input text changes and changes filters
document.querySelector("#search-text").addEventListener("input", (e) => {
  filter.searchText = e.target.value
  setFilters()
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
  createTodo(text)
  renderTodos()
  e.target.elements.text.value = ""

})


// Bonus: Add a watcher for local storage
// sync edit and index title storage
window.addEventListener("storage", (e) => {
  if (e.key === "todos") {
    renderTodos()
  }
})

