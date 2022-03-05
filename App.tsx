import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import {RootStackParamList} from './src/navigation/types';
import CounterScreen from './src/screens/CounterScreen';
/*
  - Stack.Navigator should contain Stack.Screen
    as its children
  - both are React components
  - use RootStackParamList to enable type checking
    for the navigator
*/
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* name prop contains the name of the route */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Overview'}}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={({route}) => ({title: route.params.name})}
        />
        <Stack.Screen name="Counter" component={CounterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
