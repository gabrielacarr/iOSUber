import React from 'react';
import {View, Text, Pressable, ImageBackground} from 'react-native';
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
              backgroundColor: '#75bbc70',
              width: 60,
              height: 60,
              borderRadius: 35,
              marginRight: 10,
              bottom: 20,
            }}>
            <Entypo name={'user'} size={59} color={'black'} />
          </View>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                color: '#e6f9fc',
                fontSize: 20,
              }}>
              Gabriela Cardo
            </Text>
            <Text style={{color: '#A19F9F'}}>
              5.00 <AntDesign name={'star'} size={12.6} color={'#A19F9F'} />
            </Text>
          </View>
        </View>

        {/* Messages Row */}
        <View
          style={
            {
              // borderTopColor: '#3A3A3A',
              // borderTopWidth: 1,
              // borderBottomWidth: 1,
              // borderBottomColor: '#3A3A3A',
              // paddingVertical: 20,
              // marginVertical: 5,
            }
          }>
          <Pressable
            onPress={() => {
              console.warn('Messages');
            }}>
            <Text
              style={{
                color: '#DFDEDE',
                marginBottom: 5,
                marginLeft: 85,
              }}>
              Messages
            </Text>
            <View
              style={{
                width: 85,
                height: 4,
                backgroundColor: '#51a2b0',
                position: 'relative',
                marginLeft: 60,
                marginBottom: 40,
                top: 2,
                left: 15,
                borderRadius: 5,
              }}
            />
          </Pressable>
        </View>
        {/* Do More row */}
        <Pressable
          onPress={() => {
            console.warn('Do more');
          }}>
          <Text
            style={{color: '#545353', paddingVertical: 10, marginBottom: 10}}>
            Do more with your account
          </Text>
        </Pressable>

        {/* Food Delivery Row */}
        <Pressable
          onPress={() => {
            console.warn('Food delivery');
          }}>
          <ImageBackground
            source={require('../assets/images/getFood.png')}
            style={{
              width: 300,
              height: 100,
              marginLeft: -20,
            }}>
            <Text
              style={{
                marginLeft: 18,
                marginTop: 12,
                color: '#DFDEDE',
                paddingVertical: 5,
                fontSize: 18,
              }}>
              Order food while you ride
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: '#c5c9c9',
                marginLeft: 20,
              }}>
              Local restaurants, delivered at Uber speed with just a tap.
            </Text>
          </ImageBackground>
        </Pressable>

        {/* Make Money Row */}
        <Pressable
          onPress={() => {
            console.warn('Make money');
          }}>
          <Text style={{color: '#DFDEDE', paddingVertical: 5, marginTop: 10}}>
            Make money driving
          </Text>
        </Pressable>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
export default CustomDrawer;
