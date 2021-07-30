import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveCompleted = async value => {
  try {
    const completedTasks = JSON.stringify(value);
    await AsyncStorage.setItem('completedTasks', completedTasks);
  } catch (err) {
    console.log(err);
  }
};

export const savePendings = async value => {
  try {
    const pendingTasks = JSON.stringify(value);
    await AsyncStorage.setItem('pendingTasks', pendingTasks);
  } catch (err) {
    console.log(err);
  }
};

export const getCompleted = async setter => {
  try {
    const completedTasks = await AsyncStorage.getItem('completedTasks');
    setter(completedTasks != null ? JSON.parse(completedTasks) : []);
  } catch (err) {
    console.log(err);
  }
};

export const getPendings = async setter => {
  try {
    const pendingTasks = await AsyncStorage.getItem('pendingTasks');
    setter(pendingTasks != null ? JSON.parse(pendingTasks) : []);
  } catch (err) {
    console.log(err);
  }
};
