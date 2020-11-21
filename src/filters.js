// Sets up filters default object
const filters = {
  searchText: "",
  hideCompleted: false
}

// Gets filters for notes
const getFilters = () => filters

// Sets filters SearchText or Completed status
const setFilters = ({ searchText, hideCompleted }) => {

  if (typeof searchText === "string") {
    filters.searchText = searchText
  }
  if (typeof hideCompleted === "boolean") {
    filters.hideCompleted = hideCompleted
  }
}

// exporting filters
export { getFilters, setFilters }