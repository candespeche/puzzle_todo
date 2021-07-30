import React, {createContext, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { saveCompleted, savePendings } from './storage';

const initialState = {
  completed: [],
  pending: [],
  setNewTask: () => {},
  setStatus: () => {},
  setPendingTasks: () => {},
  setCompletedTasks: () => {},
};

const TasksContext = createContext(initialState);

const TasksProvider = ({children}) => {
  const [completed, setCompleted] = useState([]);
  const [pending, setPending] = useState([]);

  useEffect(() => {
    savePendings(pending);
    saveCompleted(completed);
  }, [pending, completed]);

  const handleStatus = task => {
    if (task.completed) {
      task.completed = !task.completed;
      const eraseTask = completed.filter(el => el.id !== task.id);
      setCompleted(eraseTask);
      setPending([...pending, task]);
    } else {
      task.completed = !task.completed;
      const eraseTask = pending.filter(el => el.id !== task.id);
      setPending(eraseTask);
      setCompleted([...completed, task]);
    }
  };

  const defaultState = {
    completed,
    pending,
    setNewTask: newTask => {
      setPending(prev => [...prev, newTask]);
    },
    setStatus: task => handleStatus(task),
    setPendingTasks: tasks => setPending(tasks),
    setCompletedTasks: tasks => {
      setCompleted(tasks);
    },
  };

  return (
    <TasksContext.Provider value={defaultState}>
      {children}
    </TasksContext.Provider>
  );
};

TasksProvider.propTypes = {
  children: PropTypes.element,
};

TasksProvider.defaultProps = {
  children: {},
};

export {TasksContext, TasksProvider};
