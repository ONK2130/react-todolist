import { useState } from "react"

function EditForm({ todo, editTodo }) {

    const [content, setContent] = useState(todo.content)
    const handleSubmit = (e) => {
        e.preventDefault()
        editTodo(todo.id, content)
    }
    return <form className="create-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Add a new todo"
            value={content}
            onChange={(e) => setContent(e.target.value)} />
        <button type="submit">Done</button>
    </form>
}

export default EditForm