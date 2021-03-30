import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigation from './Home';

const Drawer = createDrawerNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      {/* <HomeNavigation /> */}
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeNavigation} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigation;
