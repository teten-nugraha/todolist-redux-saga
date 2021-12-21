import axios from "axios";

const axiosApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {'Content-Type': 'application/json'}
});

// get all todos
export const getAllTodos = async () => {
    try{
        const todos = await axiosApi.get('todos?_limit5')
        return todos.data
    }catch(err) {
        return console.error(err)
    }
}

// create new todo
export const createNewTodo = async(title) => {
    try{
        const todo = await axiosApi.post('todos', {
            title
        })

        return todo.data
    }catch(err){
        return console.error(err)
    }
}

// delete todo
export const deleteExistedTodo = async (id) => {
    try{
        await axiosApi.delete('todos/${id}')

        return id
    }catch(err) {
        return console.error(err)
    }
}