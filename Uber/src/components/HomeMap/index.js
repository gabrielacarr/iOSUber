import React from 'react';
import {View, Image, Dimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const HomeMap = () => {
  return (
    <View
      style={{
        height: Dimensions.get('window').height - 390,
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
        }}>
        <Marker coordinate={{latitude: 37.78825, longitude: -122.4324}}>
          <Image
            style={{width: 70, height: 70, resizeMode: 'contain'}}
            source={require('../../assets/images/top-UberX.png')}
          />
        </Marker>
      </MapView>
    </View>
  );
};
export default HomeMap;
