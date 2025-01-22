import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import LoginPage from './Components/LoginPage';
import NavigationBar from './NavigationBar';
import { RootStackParamList } from './types';
import RegisterForm from './NavigationPage/RegisterPage';

const Stack = createStackNavigator<RootStackParamList>();
 
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NavigationBar"
          component={NavigationBar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterForm"
          component={RegisterForm}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}; 

export default App;
