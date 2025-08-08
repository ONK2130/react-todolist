import { useState } from 'react'
import CreateForm from './CreateForm'
import Todo from './Todo'

function TodoWrapper() {

    const [todos, setTodos] = useState([
        {
            content: 'Work', id: Math.random(),
            isCompleted: true, isEditing: false,
        },
        {
            content: 'Study React', id: Math.random(),
            isCompleted: false, isEditing: false,
        },
    ]);

    const addTodo = (content) => {
        setTodos([...todos, { content, id: Math.random() }])
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => {
            return todo.id !== id
        }))
    }
    const toggleCompleted = (id) => {
        setTodos(todos.map((todo) => {
            return todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        }))
    }

    const editTodo = (id, newContent) => {
        setTodos(todos.map((todo) => {
            return todo.id === id ? { ...todo, content: newContent, isEditing: false } : todo
        }))
    }

    const toggleEditing = (id) => {
        setTodos(todos.map((todo) => {
            return todo.id === id
                ? { ...todo, isEditing: !todo.isEditing } : todo
        }))
    }
    return (
        <div className="wrapper">
            <h1>Todo List</h1>
            <CreateForm addTodo={addTodo} />
            {todos.map((todo) => {
                return <Todo toggleCompleted={toggleCompleted}
                    toggleEditing={toggleEditing} editTodo={editTodo}
                    todo={todo} key={todo.id} deleteTodo={deleteTodo} />
            })}
        </div>
    );
}

export default TodoWrapper;