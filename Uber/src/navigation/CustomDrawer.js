import React from 'react';
import {View, Text, Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView style={{backgroundColor: 'black'}} {...props}>
      <View style={{backgroundColor: 'black', padding: 15}}>
        {/* User Row */}
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            paddingVertical: 40,
          }}>
          <View
            style={{
              backgroundColor: '#cacaca',
              width: 50,
              height: 50,
              borderRadius: 25,
              marginRight: 10,
              bottom: 20,
            }}>
            <Entypo name={'user'} size={49} color={'black'} />
          </View>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
              }}>
              Gabriela Cardo
            </Text>
            <Text style={{color: '#A19F9F'}}>
              5.00 <AntDesign name={'star'} size={13} color={'#A19F9F'} />
            </Text>
          </View>
        </View>

        {/* Messages Row */}
        <View
          style={{
            borderTopColor: '#3A3A3A',
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderBottomColor: '#3A3A3A',
            paddingVertical: 25,
            marginVertical: 10,
          }}>
          <Pressable
            onPress={() => {
              console.warn('Messages');
            }}>
            <Text style={{color: '#DFDEDE', flexDirection: 'row'}}>
              Messages
              <AntDesign name={'right'} size={13} color={'#DFDEDE'} />
            </Text>
          </Pressable>
        </View>
        {/* Do More row */}
        <Pressable
          onPress={() => {
            console.warn('Do more');
          }}>
          <Text style={{color: '#545353', paddingVertical: 5}}>
            Do more with your account
          </Text>
        </Pressable>

        {/* Food Delivery Row */}
        <Pressable
          onPress={() => {
            console.warn('Food delivery');
          }}>
          <Text style={{color: '#DFDEDE', paddingVertical: 5}}>
            Get food delivered!
          </Text>
        </Pressable>

        {/* Make Money Row */}
        <Pressable
          onPress={() => {
            console.warn('Make money');
          }}>
          <Text style={{color: '#DFDEDE', paddingVertical: 5}}>
            Make money driving
          </Text>
        </Pressable>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
export default CustomDrawer;
