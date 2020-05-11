import { TODO_ACTIONS } from '../actions/todo';

export const todoList = (state = [], action) => {
  switch (action.type) {
    case TODO_ACTIONS.FETCH_TODO_LIST_SUCCESS:
      return action.todoList;
    case TODO_ACTIONS.ADD_TODO:
      return [...state, action.todo];
    case TODO_ACTIONS.REMOVE_TODO:
      return [...state].splice(action.todoIndex, 0, 1);
    default: 
      return state;
  }
}