import React, {useContext, useState} from 'react';
import PropTypes from 'prop-types';
import {useForm, useController, Controller} from 'react-hook-form';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';
import {HourPicker, MainButton, Subtitle} from '../components';
import {Container, ScrollView} from '../styles/screens';
import {
  FormInput,
  formLabel,
  DateContainer,
  DatePickerContainer,
  formPicker,
} from '../styles/form';
import {colors, formData, functions} from '../constants';
import { TasksContext } from '../context/TasksContext';
import { TouchableOpacity, Text } from 'react-native';

function AddTaskScreen({navigation}) {
  const {setNewTask} = useContext(TasksContext);
  const {control, handleSubmit} = useForm();
  const [selectedRepeat, setSelectedRepeat] = useState('Weekly');
  const [selectedRemind, setSelectedRemind] = useState('');
  const [deadline, setDeadline] = useState('2020-09-21');
  const [showDeadline, setShowDeadline] = useState(false);
  const {repeat, remind} = formData;
  const {generateRandomColor} = functions;
  const id = new Date().getTime();

  const Input = ({control, name, placeholder}) => {
    const {field} = useController({
      control,
      defaultValue: '',
      name,
    });

    return (
      <FormInput
        placeholder={placeholder}
        value={field.value}
        onChangeText={field.onChange}
      />
    );
  };

  const handlePress = data => {
    setNewTask({...data, completed: false, id, color: generateRandomColor()});
    navigation.goBack();
  };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || deadline;
    setDeadline(JSON.stringify(currentDate).slice(1, 11));
    setShowDeadline(false);
  };

  const renderForm = () => (
    <ScrollView>
      <Subtitle>Title</Subtitle>
      <Input name="title" placeholder="Design team meeting" control={control} />
      <Subtitle>Deadline</Subtitle>
      <TouchableOpacity style={formLabel} onPress={() => setShowDeadline(true)}>
        <Text style={{color: colors.BLACK}}>{deadline}</Text>
      </TouchableOpacity>
      {showDeadline && (
        <Controller
          name="deadline"
          control={control}
          render={({field}) => (
            <DateTimePicker
              {...field}
              mode="date"
              display="spinner"
              value={new Date()}
              minimumDate={id}
              textColor={colors.GREY}
              onChange={onChange}
              style={formLabel}
            />
          )}
        />
      )}
      <DateContainer>
        <DatePickerContainer>
          <Subtitle>Start time</Subtitle>
          <HourPicker>10:00 Am</HourPicker>
        </DatePickerContainer>
        <DatePickerContainer>
          <Subtitle>End time</Subtitle>
          <HourPicker>08:00 Pm</HourPicker>
        </DatePickerContainer>
      </DateContainer>
      <Subtitle>Remind</Subtitle>
      <Controller
        name="remind"
        control={control}
        render={({field}) => (
          <RNPickerSelect
            {...field}
            onValueChange={value => {
              setSelectedRemind(value);
            }}
            value={selectedRemind}
            items={remind}
            style={formPicker}
          />
        )}
      />
      <Subtitle>Repeat</Subtitle>
      <Controller
        name="repeat"
        control={control}
        render={({field}) => (
          <RNPickerSelect
            {...field}
            onValueChange={value => {
              setSelectedRepeat(value);
            }}
            value={selectedRepeat}
            items={repeat}
            style={formPicker}
          />
        )}
      />
    </ScrollView>
  );

  return (
    <Container>
      {renderForm()}
      <MainButton onPress={handleSubmit(handlePress)}>Create a Task</MainButton>
    </Container>
  );
}

AddTaskScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func),
  route: PropTypes.objectOf(PropTypes.any),
};

AddTaskScreen.defaultProps = {
  navigation: () => {},
  route: {},
};

export default AddTaskScreen;
