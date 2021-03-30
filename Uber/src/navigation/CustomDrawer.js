import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{backgroundColor: 'black', padding: 15}}>
        {/* User Row */}

        {/* Messages Row */}

        {/* Do More row */}

        {/* Make Money Row */}
        <Pressable
          onPress={() => {
            console.warn('Make money');
          }}>
          <Text style={{color: 'white'}}>Make me money driving</Text>
        </Pressable>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
export default CustomDrawer;
