import React, {useEffect, useState} from 'react';
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import Loading from "./Loading";
import {TodoistApi} from "@doist/todoist-api-typescript";

const Todos = () => {

    const api = new TodoistApi('df771856a39a73669029dae0e24cd22c75caaf2c')


    const [todos, setTodos] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        api.getTasks()
            .then(todos => setTodos(todos))
            .then(() => setIsLoading(false))
            .catch(err => console.log(err))
    }, [todos]);


    const onAddHandler = (content) => {
        setIsLoading(true)
        api.addTask({content})
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const onDeleteHandler = (id) => {
        setIsLoading(true)
        api.deleteTask(id)
            .then(res => console.log(res))
            .then(() => setIsLoading(false))
            .catch(err => console.log(err))
    }

    const onCheckHandler = (id) => {
        setIsLoading(true)
        api.closeTask(id).then(res => console.log(res)).then(() => setIsLoading(false))
    }

    const onUpdateHandler = (id, content) => {
        setIsLoading(true)
        api.updateTask(id, {content}).then(res => console.log(res)).then(() => setIsLoading(false))
    }

    const todosList = todos.map((todo) => {
        return <TodoItem
            key={todo.id}
            id={todo.id}
            content={todo.content}
            onCheck={onCheckHandler}
            onDelete={onDeleteHandler}
            onUpdate={onUpdateHandler}
        />
    })

    const todosMain = <div>
        {todosList}
    </div>

    const render = () => {
        if (isLoading) {
            return <Loading/>
        }
        return todosMain
    }


    return (< >
        <TodoForm ц onAdd={onAddHandler}/>
        {render()}
    </>);
};

export default Todos;
