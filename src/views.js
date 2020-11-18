import { saveTodos, getTodos, removeTodo, toggleTodo } from "./todos"
import { getFilters } from "./filters"

// Render application todos
const renderTodos = () => {
  

  const filteredTodos = getTodos().filter((todo) => {
    const todoEl = document.querySelector("#todos")
    const filters = getFilters()
    const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed

    return searchTextMatch && hideCompletedMatch
  })

  // return incompleted todos
  const incompleteTodo = filteredTodos.filter((todo) => !todo.completed)

  document.querySelector("#todos").innerHTML = ""
  document.querySelector("#todos").appendChild(generateSummaryDOM(incompleteTodo))

  if (filteredTodos.length > 0) {
    filteredTodos.forEach((todo) => {
      document.querySelector("#todos").appendChild(generateTodoDOM(todo))
    })
  } else if (filteredTodos.length < 1) {
    const noTodoMessage = document.createElement("p")
    noTodoMessage.classList.add("empty-message")
    noTodoMessage.textContent = "No to-dos to show"
    document.querySelector("#todos").appendChild(noTodoMessage)
  }
}

// Generate DOM Elements for todos
const generateTodoDOM = (todo) => {

  const todoEl = document.createElement("label")
  const containerEl = document.createElement("div")
  const textEl = document.createElement("span")
  const removeButton = document.createElement("button")
  const checkbox = document.createElement("input")

  // create checkbox for each
  checkbox.setAttribute("type", "checkbox")
  checkbox.checked = todo.completed
  containerEl.appendChild(checkbox)
  checkbox.addEventListener("change", () => {
    toggleTodo(todo.id)
    renderTodos()
  })


  // set todo text
  textEl.textContent = todo.text
  containerEl.appendChild(textEl)


  // Setup Container
  todoEl.classList.add("list-item")
  containerEl.classList.add("list-item__container")
  todoEl.appendChild(containerEl)


  // create x/remove button for each todo
  removeButton.textContent = "remove"
  removeButton.classList.add("button", "button--text")
  todoEl.appendChild(removeButton)
  removeButton.addEventListener("click", () => {
    removeTodo(todo.id)
    renderTodos()
  })

  return todoEl
}

// Generate Summary Dom
const generateSummaryDOM = (incompleteTodo) => {
  const summary = document.createElement("h4")
  const plural = incompleteTodo.length === 1 ? "" : "s"
  summary.classList.add("list-title")
  summary.textContent = `You have ${incompleteTodo.length} todo${plural} left`
  return summary
}

// Set up the exports
export { renderTodos, generateTodoDOM, generateSummaryDOM }