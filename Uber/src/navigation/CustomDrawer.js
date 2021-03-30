import React from 'react';
import {View, Text} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <View style={{backgroundColor: 'black'}}>
        {/* User Row */}

        {/* Messages Row */}

        {/* Do More row */}

        {/* Make Money Row */}
      </View>
    </DrawerContentScrollView>
  );
};
export default CustomDrawer;
