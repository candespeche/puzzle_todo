import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback } from 'react-native';
import { TaskContainer, ContentContainer, Checkbox, Text } from '../styles/task';
import { TasksContext } from '../context/TasksContext';
import {colors} from '../constants';
import { Icon } from 'react-native-elements';

function Task({filled, task}) {
  const {setStatus} = useContext(TasksContext);

  const handleTaskPress = () => {
    setStatus(task);
  };
  return (
    <TaskContainer>
      <TouchableWithoutFeedback onPress={handleTaskPress}>
        <ContentContainer>
          <Checkbox
            backgroundColor={filled ? colors.RED : 0}
            borderWidth={1.5}
            style={{
              borderColor: filled ? colors.RED : task.color || colors.RED,
            }}>
            <Icon name="check" color={colors.WHITE} type="feather" size={7} />
          </Checkbox>
          <Text>{task.title}</Text>
        </ContentContainer>
      </TouchableWithoutFeedback>
    </TaskContainer>
  );
}

Task.propTypes = {
  filled: PropTypes.bool,
  task: PropTypes.objectOf(PropTypes.any),
};

Task.defaultProps = {
  filled: false,
  task: {},
};

export default Task;
