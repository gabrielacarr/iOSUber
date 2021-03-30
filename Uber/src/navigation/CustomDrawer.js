import React from 'react';
import {View, Text} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <Text> customDrawer component</Text>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
export default CustomDrawer;
