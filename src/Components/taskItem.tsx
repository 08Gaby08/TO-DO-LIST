import React from 'react';
import { itemStyles, completedStyles, buttonStyles } from '../Styles/taskItem.';

interface Task {
  id: number;
  description: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  toggleTaskCompletion: (taskId: number) => void;
  deleteTask: (taskId: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleTaskCompletion, deleteTask }) => (
  <li css={[itemStyles, task.completed && completedStyles]}>
    <span onClick={() => toggleTaskCompletion(task.id)}>
      {task.description}
    </span>
    <button css={buttonStyles} onClick={() => deleteTask(task.id)}>
      Remover
    </button>
  </li>
);

export default TaskItem;