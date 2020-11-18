// Sets up filters default object
const filters = {
  searchText: "",
  hideCompleted: false
}

// Gets filters for notes
const getFilters = () => filters

// Sets filters SearchText or Completed status
const setFilters = (updates) => {

  if (typeof updates.searchText === "string") {
    filters.searchText = updates.searchText
  }
  if (typeof updates.hideCompleted === "boolean") {
    filters.hideCompleted = updates.hideCompleted
  }
}

// exporting filters
export { getFilters, setFilters }