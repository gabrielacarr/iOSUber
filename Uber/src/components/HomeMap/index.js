import React from 'react';
import {View, Image, Dimensions, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import {mapStyle} from '../constant/mapStyle';
import cars from '../../assets/data/cars';

const HomeMap = () => {
  const getImage = type => {
    if (type === 'UberX') {
      return require('../../assets/images/top-UberX.png');
    }
    if (type === 'Comfort') {
      return require('../../assets/images/top-Comfort.png');
    }
    return require('../../assets/images/top-UberXL.png');
  };

  return (
    <View
      style={{
        height: Dimensions.get('window').height - 390,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        mapStyle,
      }}>
      <MapView
        customMapStyle={mapStyle}
        mapStyle={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        initialRegion={{
          latitude: 37.773972,
          longitude: -122.431297,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="standard">
        {cars.map(car => (
          <Marker
            key={car.id}
            coordinate={{latitude: car.latitude, longitude: car.longitude}}>
            <Image
              style={{
                width: 70,
                height: 50,
                resizeMode: 'contain',
                transform: [
                  {
                    rotate: `${car.heading}deg`,
                  },
                ],
              }}
              source={getImage(car.type)}
            />
          </Marker>
        ))}
      </MapView>
    </View>
  );
};
export default HomeMap;
