import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MainButton, Task, Title } from '../components';
import { ScrollView, Container } from '../styles/screens';
import { TasksContext } from '../context/TasksContext';
import { getCompleted, getPendings } from '../context/storage';
import { Icon } from 'react-native-elements/dist/icons/Icon';

function MainScreen({navigation}) {
  const {pending, setPendingTasks, completed, setCompletedTasks} = useContext(TasksContext);

  const handlePress = () => {
    navigation.navigate('AddTask');
  };

  useEffect(() => {
    getPendings(setPendingTasks);
    getCompleted(setCompletedTasks);
  }, []);

  const renderTasks = () => (
    <>
      <Title>Completed Tasks</Title>
      {completed.map(task => (
        <Task key={task.id} filled task={task} />
      ))}
      <Title>Pending Tasks</Title>
      {pending.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </>
  );

  return (
    <Container>
      <ScrollView>
        {renderTasks()}
      </ScrollView>
      <MainButton onPress={handlePress}>Add Task</MainButton>
    </Container>
  );
}

MainScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func),
};

MainScreen.defaultProps = {
  navigation: () => {},
};

export default MainScreen;
