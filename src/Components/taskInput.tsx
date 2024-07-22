import React, { useState } from 'react';
import { css } from '@emotion/react';
import { inputContainer, inputStyles, buttonStyles } from '../Styles/taskInput';


interface TaskInputProps {
  addTask: (description: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <div css={inputContainer}>
      <input
        css={inputStyles}
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Adicione uma nova tarefa..."
      />
      <button css={buttonStyles} onClick={handleAddTask}>
        Adicionar
      </button>
    </div>
  );
};

export default TaskInput;
