import React, { useState } from 'react';
import {containerStyles} from './Styles/app';
import TaskInput from './Components/taskInput';
import TaskList from './Components/taskList'


const App: React.FC = () => {
  const [tasks, setTasks] = useState<Array<{ id: number; description: string; completed: boolean }>>([]);

  const addTask = (description: string) => {
    const newTask = { id: Date.now(), description, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (taskId: number) => {
    setTasks(tasks.map(task => (task.id === taskId ? { ...task, completed: !task.completed } : task)));
  };

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div css={containerStyles}>
      <h1>Gerenciador de Tarefas</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
