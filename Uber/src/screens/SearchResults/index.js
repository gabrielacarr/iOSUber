import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import RouteMap from '../../components/RouteMap';
import UberTypeRow from '../../components/UberTypeRow';
import UberTypes from '../../components/UberTypes';
import {useRoute} from '@react-navigation/native';

const SearchResults = () => {
  const route = useRoute();
  console.log(route.params);
  const {originPlace, destinationPlace} = route.params;
  return (
    <View>
      <RouteMap origin={originPlace} destination={destinationPlace} />
      <UberTypes />
    </View>
  );
};
export default SearchResults;
