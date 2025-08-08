import { useState } from 'react'
import CreateForm from './CreateForm'
import Todo from './Todo'

function TodoWrapper() {

    const [todos, setTodos] = useState([
        {
            content: 'Work', 
            id: Math.random(),
            // ⭐ 復原功能關鍵屬性：isCompleted 控制顯示狀態
            isCompleted: true,  // true = 已完成（顯示灰色+刪除線+復原按鈕）
            isEditing: false,
        },
        {
            content: 'Study React', 
            id: Math.random(),
            // ⭐ 復原功能關鍵屬性：isCompleted 控制顯示狀態
            isCompleted: false,  // false = 未完成（顯示黃色+完成按鈕）
            isEditing: false,
        },
    ]);

    const addTodo = (content) => {
        setTodos([...todos, { 
            content, 
            id: Math.random(),
            // ⭐ 復原功能：新增的 todo 預設為未完成
            isCompleted: false,  // 新項目預設未完成
            isEditing: false
        }])
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => {
            return todo.id !== id
        }))
    }
    // ⭐ 復原功能核心邏輯 - 切換完成狀態
    // 這個函數同時處理「標記完成」和「復原未完成」兩個動作
    const toggleCompleted = (id) => {
        setTodos(todos.map((todo) => {
            // 找到對應的 todo，將 isCompleted 狀態反轉
            // true → false (復原為未完成)
            // false → true (標記為完成)
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
                return <Todo 
                    // ⭐ 復原功能傳遞：將 toggleCompleted 函數傳給子組件
                    toggleCompleted={toggleCompleted}
                    toggleEditing={toggleEditing} 
                    editTodo={editTodo}
                    todo={todo} 
                    key={todo.id} 
                    deleteTodo={deleteTodo} />
            })}
        </div>
    );
}

export default TodoWrapper;