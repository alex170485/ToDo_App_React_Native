import {
    ADD_TODO, CLEAR_ERROR,
    CLEAR_LOADER,
    FETCH_TODOS,
    HIDE_LOADER,
    REMOVE_TODO,
    SHOW_ERROR,
    SHOW_LOADER,
    UPDATE_TODO
} from "../types";

export const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state, todos: [...state.todos, {
                    id:id,
                    title: action.title
                }]
            }
        case REMOVE_TODO:
            return {...state, todos: state.todos.filter(todo => todo.id !== action.id)}
        case UPDATE_TODO:
            return {
                ...state, todos: state.todos.map(todo => {
                    if (todo.id === action.id) {
                        todo.title = action.title}
                    return todo
                })
            }
        case SHOW_LOADER : {
            return {
                ...state, loading: true
            }
        }
        case HIDE_LOADER : {
            return {
                ...state, loading: false
            }
        }
        case CLEAR_ERROR : {
            return {
                ...state, error: null
            }
        }
        case SHOW_ERROR : {
            return {
                ...state,
                error: state.error
            }
        }
        case FETCH_TODOS : {
            return {
                ...state,
                todos: state.todos
            }
        }
        default:
            return state
    }

    return state

}