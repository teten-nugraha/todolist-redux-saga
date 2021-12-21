import { spawn } from "redux-saga/effects";

// Sagas
import todoSaga from "./todo-sagas";

// export the  root saga
export default function* rootSaga() {
    console.log("Hello from redux-saga")

    yield spawn(todoSaga)
}