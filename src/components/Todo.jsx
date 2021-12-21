import React, { useEffect } from "react";
import PropTypes from 'prop-types';

import { connect } from "react-redux";

import {
    GET_TODOS_REQUESTED,
    DELETE_TODO_REQUESTED
} from '../redux/actions/todo-action';

import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const Todo = ({
    todo: {loading, todos},
    getTodos,
    deleteTodo
}) => {
    useEffect(() => {
        getTodos()
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <TodoForm />
            { loading && 'Loading ...'}
            {todos && todos.map((todo, index) => (
                <TodoItem todo={todo} key={index} deleteTodo={deleteTodo} />
            ))}
        </>
    )
}

Todo.propTypes = {
    loading: PropTypes.bool,
    todos: PropTypes.array,
    getTodos: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
}

// get state to props
const mapStateToProps = (state) => ({
    todo: state.todo
})

// get dispatch / function to props
const mapDispatchToProps = (dispatch) => ({
    getTodos: () => dispatch({ type: GET_TODOS_REQUESTED }),
    deleteTodo: (id) => dispatch({ type: DELETE_TODO_REQUESTED, payload: id })
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo);