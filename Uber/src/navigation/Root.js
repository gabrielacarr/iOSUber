import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DestinationSearch from '../screens/DestinationSearch';
import SearchResults from '../screens/SearchResults';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        //initialRouteName={'HomeScreen'}
      >
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen
          name={'DestinationSearch'}
          component={DestinationSearch}
        />
        <Stack.Screen name={'SearchResults'} component={SearchResults} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigation;
