import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Main from './pages/Main';
import Sleep from './pages/workouts/Sleep';
import WakeUp from './pages/workouts/WakeUp';

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Main} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen
        name='Sleep'
        component={Sleep}
        options={{ headerBackImage: () => (<Ionicons name="arrow-back" size={24} color="black" />), headerBackTitleVisible: false }}
        />
        <Stack.Screen
        name='WakeUp'
        component={WakeUp}
        options={{ headerBackImage: () => (<Ionicons name="arrow-back" size={24} color="black" />), headerBackTitleVisible: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
