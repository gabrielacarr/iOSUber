import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigation from './Home';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

const DummyScreen = props => (
  <View
    style={{
      backgroundColor: 'black',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text style={{color: '#A19F9F'}}>{props.name}</Text>
  </View>
);

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#51a2b0',
          inactiveTintColor: '#e3e4e6',
        }}
        drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Home" component={HomeNavigation} />

        <Drawer.Screen name="Your Trips">
          {() => <DummyScreen name={'Your Trips'} />}
        </Drawer.Screen>

        <Drawer.Screen name="Help">
          {() => <DummyScreen name={'Help'} />}
        </Drawer.Screen>

        <Drawer.Screen name="Wallet">
          {() => <DummyScreen name={'Wallet'} />}
        </Drawer.Screen>

        <Drawer.Screen name="Settings">
          {() => <DummyScreen name={'Settings'} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigation;
