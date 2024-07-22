import React from 'react';
import TaskItem from './taskItem'

interface Task {
  id: number;
  description: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  toggleTaskCompletion: (taskId: number) => void;
  deleteTask: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;