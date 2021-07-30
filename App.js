import React from 'react';
import {TasksProvider} from './src/context/TasksContext';
import MainNavigation from './src/navigation/MainNavigation';

export default function App() {
  return (
    <TasksProvider>
      <MainNavigation />
    </TasksProvider>
  );
}
