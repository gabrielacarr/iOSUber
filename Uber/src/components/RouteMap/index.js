import React from 'react';
import {View, Image, Dimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import cars from '../../assets/data/cars';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyCvkTcVKIt8528UDp__D - S_du5zd__jE14';

// san fran origin
const RouteMap = () => {
  const origin = {
    latitude: 37.773972,
    longitude: -122.431297,
  };
  const destination = {
    latitude: 37.773972,
    longitude: -122.431297,
  };
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
        showsUserLocation={true}
        initialRegion={{
          latitude: 37.773972,
          longitude: -122.431297,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={4}
          strokeColor="#4895ef"
        />
        <Marker coordinate={origin} title={'Origin'} pinColor={'#4895ef'} />
        <Marker
          coordinate={destination}
          title={'Destination'}
          pinColor={'#4cc9f0'}
        />
      </MapView>
    </View>
  );
};
export default RouteMap;
