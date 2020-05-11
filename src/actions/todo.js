export const TODO_ACTIONS = {
  ADD_TODO: 'ADD_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
  FETCH_TODO_LIST_SUCCESS: 'FETCH_TODO_LIST_SUCCESS',
}

export const addTodo = (todo) => {
  return {
    type: TODO_ACTIONS.ADD_TODO,
    todo,
  }
}

export const removeTodo = (todoIndex) => {
  return {
    type: TODO_ACTIONS.REMOVE_TODO,
    todoIndex: todoIndex,
  }
}

export const fetchTodoListSuccess = (todoList) => {
  return {
    type: TODO_ACTIONS.FETCH_TODO_LIST_SUCCESS,
    todoList,
  }
}