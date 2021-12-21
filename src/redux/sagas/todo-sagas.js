import {
    put,
    call,
    takelatest,
    takeEvery
}from 'redux-saga/effects'

import * as types from '../actions/todo-action';

import {
    getAllTodos,
    createNewTodo,
    deleteExistedTodo
}from '../api/todo-api';

//get Todos
function* getTodos() {
    yield put({ type: types.SET_LOADING})

    const todos = yield call(getAllTodos)

    yield put({ type: types.GET_TODOS, payload: todos})
}

// set the title of todo
function* setTodoTitle({payload}) {
    yield put({ type: types.SET_TODO_TITLE, payload})
}

//create todo
function* createTodo({ payload }) {
    yield put({ type: types.SET_LOADING})

    const newTodo = yield call(createNewTodo, payload)

    yield put({ type: types.CREATE_TODO, payload: newTodo })

    // clear todo after creating
    yield put({ type: types.CLEAR_TODO_TITLE })
}

// delete todo
function* deleteTodo({ payload }) {
    yield put({ type: types.SET_LOADING })

    const todo = yield call(deleteExistedTodo, payload)

    yield put({ type: types.DELETE_TODO, payload: todo })
}

// export the saga todo-saga
export default function* todoSaga() {
    yield takeEvery(types.GET_TODOS_REQUESTED, getTodos)
    yield takeEvery(types.SET_TODO_TITLE_REQUESTED, setTodoTitle)
    yield takeEvery(types.CREATE_TODO_REQUESTED, createTodo)
    yield takeEvery(types.DELETE_TODO_REQUESTED, deleteTodo)
}