import React from 'react';
import { useState } from 'react';
import { Task } from './task';

interface TaskItemProps {
  task: Task;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
  editTask: (id: number, newText: string) => void;
  toggleEdit: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleTask, deleteTask, editTask, toggleEdit }) => {

  const [editText, setEditText] = useState(task.text);

  const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditText(e.target.value);
  };
  const handleSubmitEdit = () => {
    editTask(task.id, editText);
  };

  return (
    <li  className={`todo-item ${task.completed ? 'completed-task' : ''} ${task.isEditing? 'editing-task':''}`}>
      <input className="toggle" type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
      {task.isEditing ? (
        <input 
          type="text" 
          value={editText} 
          onChange={handleEdit} 
          onBlur={handleSubmitEdit}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSubmitEdit();
          }} 
        autoFocus /> 
      ) : (<label onDoubleClick={() => toggleEdit(task.id)}>{task.text}</label>
      )}  
      <button className="close-btn" onClick={() => deleteTask(task.id)}>×</button>
    </li>
  );
};

export default TaskItem;
