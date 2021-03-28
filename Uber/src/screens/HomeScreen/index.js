import React from 'react';
import {View, Text} from 'react-native';
import HomeMap from '../../components/HomeMap';
import CovidMessage from '../../components/CovidMessage';
const HomeScreen = () => {
  return (
    <View>
      <HomeMap />

      {/* Covid Message */}
      <CovidMessage />
      {/* Bottom Component */}
    </View>
  );
};
export default HomeScreen;
