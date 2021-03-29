import React from 'react';
import {View, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const HomeMap = () => {
  return (
    <View
      style={{
        height: 400,
        backgroundColor: '#a0abff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <MapView
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};
export default HomeMap;
