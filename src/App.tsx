import { useState } from 'react'
import { Task } from './shared/components/task';
import TaskList from './shared/components/TodoTaskList';
import AddTaskForm from './shared/components/AddTaskForm';
import FiltersTask from './shared/components/FiltersTask';
import 'src/App.css'


function App() {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const addTask = (newTask: string) => {
    const newTaskObject = { id: Date.now(), text: newTask, completed: false, isEditing: false };
    setTasks([...tasks, newTaskObject]);
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };
  const toggleAll = () => {
    const allCompleted = tasks.every(task => task.completed); 
    setTasks(tasks.map(task => ({ ...task, completed: !allCompleted })));
  };;

  const editTask = (id: number, newText: string) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, text: newText, isEditing: false } : task));
  };

  const toggleEdit = (id: number) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, isEditing: !task.isEditing } : task));
  };

  const deleteTask = (id: number) => {
    console.log("delete tasks")
    setTasks(tasks.filter(task => task.id !== id));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });



  return (

    <div className="todo-app">
      <header>
        <h1>todos</h1>
        <AddTaskForm addTask={addTask} toggleAll={toggleAll} />
      </header>
      <main>
        <TaskList tasks={filteredTasks} toggleTask={toggleTask} deleteTask={deleteTask} editTask={editTask} toggleEdit={toggleEdit} />
      </main>
      <FiltersTask filter={filter} setFilter={setFilter} clearCompleted={clearCompleted} totalTasks={tasks.length} completedTasks={tasks.filter(task => task.completed).length} />
    </div >
  );
}

export default App
