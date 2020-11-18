/* global todos, filters */
// "use strict"

// // read existing notes from localstorage
// const getSavedTodos = () => {
//   const todosJSON = localStorage.getItem("todos")
// // prevents the app from crashing if the data from local storage isnt being read correctly
//   try {
//     return todosJSON ? JSON.parse(todosJSON) : []
//   } catch (e) {
//     return []
//   }
// }

// // save todos to local storage
// const saveTodos = (todos) => {
//   localStorage.setItem("todos", JSON.stringify(todos))
// }

// remove Todo using X button
const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id)

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1)
  }
}

// change if todo completed or not using checkbox
const toggleCompleted = (id) => {
  const todo = todos.find((todo) => todo.id === id)

  if (todo) {
    todo.completed = !todo.completed
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
    toggleCompleted(todo.id)
    saveTodos(todos)
    renderTodos(todos, filters)
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
    saveTodos(todos)
    renderTodos(todos, filters)
  })


  return todoEl
}

// Render application todos
const renderTodos = (todos, filters) => {
  const filteredTodos = todos.filter((todo) => {
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

// generate summary
const generateSummaryDOM = (incompleteTodo) => {
  const summary = document.createElement("h4")
  const plural = incompleteTodo.length === 1 ? "" : "s"
  summary.classList.add("list-title")
  summary.textContent = `You have ${incompleteTodo.length} todo${plural} left`
  return summary
}