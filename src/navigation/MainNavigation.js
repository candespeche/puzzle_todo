import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {AddTaskScreen, MainScreen} from '../screens';
import {colors} from '../constants';
import { Icon } from 'react-native-elements';
import { IconsContainer, IconContainer } from '../styles/screens';

const Stack = createStackNavigator();

export default function MainNavigation() {
  const icons = ['search', 'bell', 'menu'];
  const stackOptions = {
    headerTitleStyle: {
      fontWeight: 'bold',
      padding: 8,
    },
    headerStyle: {
      shadowColor: colors.BLACK,
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animationEnabled: false,
          headerTitleAlign: 'left',
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <IconContainer>
              <Icon
                type="feather"
                name="chevron-left"
                size={18}
                color="black"
              />
            </IconContainer>
          ),
        }}>
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{
            title: 'To-Do App',
            headerRight: () => (
              <IconsContainer>
                {icons.map(icon => (
                  <Icon
                    key={icon}
                    type="feather"
                    name={icon}
                    size={18}
                    color="black"
                  />
                ))}
              </IconsContainer>
            ),
            ...stackOptions,
          }}
        />
        <Stack.Screen
          name="AddTask"
          component={AddTaskScreen}
          options={{
            title: 'Add Task',
            ...stackOptions,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
