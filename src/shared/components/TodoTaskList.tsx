import React from 'react';
import { Task } from './task';
import TaskItem from './TodoTask';


interface TaskListProps {
  tasks: Task[];
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
  editTask: (id: number, newText: string) => void;
  toggleEdit: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTask, deleteTask, editTask, toggleEdit }) => {
  return (

    <ul className="todo-list">
      {tasks?.map(task => (
        <TaskItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} editTask={editTask} toggleEdit={toggleEdit}/>
      ))}
    </ul>
  );
};

export default TaskList;