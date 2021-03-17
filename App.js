import * as React from 'react';
import HomeScreen from './src/components/Home';
import Details from './src/components/Details';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerShown:false,
        }} />
        <Stack.Screen name="Details" component={Details} options={{
          headerShown:false,
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
