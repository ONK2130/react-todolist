import { MdDelete, MdEdit } from "react-icons/md";
import { RotateCcw, Check } from "lucide-react";
import EditForm from "./EditForm";


function Todo({ todo, deleteTodo, toggleCompleted, toggleEditing, editTodo }) {
    return (
        todo.isEditing ? <EditForm todo={todo} editTodo={editTodo} /> :
            <div className={`todo ${todo.isCompleted ? 'completed' : ''}`}>
                {/* ⭐ 復原功能觸發點 1：點擊文字可以切換完成狀態 */}
                <p onClick={() => { toggleCompleted(todo.id) }}>{todo.content} </p>
                <div>
                    {/* ⭐ 復原功能觸發點 2：復原/完成按鈕 */}
                    {/* 根據 todo.isCompleted 狀態顯示不同圖標 */}
                    {todo.isCompleted ? (
                        // ⭐ 已完成狀態：顯示復原圖標 (RotateCcw)
                        // 點擊後會呼叫 toggleCompleted，將狀態從 true 改為 false
                        <RotateCcw 
                            className="toggle-icon" 
                            onClick={() => toggleCompleted(todo.id)} 
                            style={{ cursor: 'pointer' }} 
                        />
                    ) : (
                        // ⭐ 未完成狀態：顯示完成圖標 (Check)
                        // 點擊後會呼叫 toggleCompleted，將狀態從 false 改為 true
                        <Check 
                            className="toggle-icon" 
                            onClick={() => toggleCompleted(todo.id)} 
                            style={{ cursor: 'pointer' }} 
                        />
                    )}
                    <MdEdit 
                        className="edit-icon"
                        onClick={() => toggleEditing(todo.id)} 
                        style={{ cursor: 'pointer' }} 
                    />
                    <MdDelete 
                        className="delete-icon"
                        onClick={() => deleteTodo(todo.id)} 
                        style={{ cursor: 'pointer' }} 
                    />
                </div>
            </div>
    )
}

export default Todo