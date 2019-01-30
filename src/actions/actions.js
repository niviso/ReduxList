export const addTodo = (newItem) => ({
    type: "ADD_TODO",
    newItem: newItem
})
export const removeTodo = (key) => ({
    type: "REMOVE_TODO",
    key: key
})