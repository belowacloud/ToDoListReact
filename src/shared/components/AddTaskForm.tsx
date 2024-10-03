import React, { useState } from 'react';
interface AddTaskFormProps {
    addTask: (text: string) => void;
    toggleAll: () => void
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ addTask, toggleAll}) => {
    const [text, setText] = useState('');
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!text.trim()) return; // Prevent adding empty tasks
        addTask(text); // Call the addTask function with the current input text
        setText(''); // Clear the input field after adding the task
    };

    return (
        <div className="input-container">
            <button className="toggle-all" onClick={() => toggleAll()}>❯</button>
        <form  onSubmit={handleSubmit}>
            
            <input className="new-input" placeholder="What needs to be done?" type="text"
                value={text}
                onChange={(e) => setText(e.target.value)} />
        </form>
        </div>
    )
}
export default AddTaskForm;
