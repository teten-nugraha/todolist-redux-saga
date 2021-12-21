import{
SET_LOADING,
  GET_TODOS,
  SET_TODO_TITLE,
  CREATE_TODO,
  DELETE_TODO,
  CLEAR_TODO_TITLE
} from "../actions/todo-action";

// define your state here
const initialState = {
    loading: false,
    todos: [],
    title: ''
}

// This export default will control your state for your application
export default(state = initialState, {type, payload}) => {
    switch(type) {
        case SET_LOADING:
          return {
            ...state,
            loading: true
          }
        case GET_TODOS:
          return {
            ...state,
            todos: payload,
            loading: false
          }
        case SET_TODO_TITLE:
          return {
            ...state,
            title: payload
          }
        case CREATE_TODO:
          return {
            ...state,
            todos: [payload, ...state.todos],
            loading: false
          }
        case CLEAR_TODO_TITLE:
          return {
            ...state,
            title:''
          }
        case DELETE_TODO:
          return {
            ...state,
            todos: state.todos.filter(todo => todo.id !== payload),
            loading: false
          }
        default:
          return state
    }// end switch
}