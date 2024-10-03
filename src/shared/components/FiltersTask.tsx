import React from 'react';

interface TodoFiltersProps {
  filter: 'all' | 'active' | 'completed';
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
  clearCompleted: () => void;
  totalTasks: number;
  completedTasks: number;
}

const FiltersTask: React.FC<TodoFiltersProps> = ({ filter, setFilter, clearCompleted, totalTasks, completedTasks }) => {
  return (
    <footer className="footer">
        <span className="todo-count">{totalTasks-completedTasks} items left! </span>
        <ul className="filters">
          <li><a href="#/" onClick={() => setFilter('all')} className={filter === 'all' ? 'selected' : ''}>All</a></li>
          <li><a href="#/active" onClick={() => setFilter('active')} className={filter === 'active' ? 'selected' : ''}>Active</a></li>
          <li><a href="#/completed" onClick={() => setFilter('completed')} className={filter === 'completed' ? 'selected' : ''}>Completed</a></li>
        </ul>
        <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
      </footer>

  )
}
export default FiltersTask