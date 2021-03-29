import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import RouteMap from '../../components/RouteMap';
import UberTypeRow from '../../components/UberTypeRow';
import UberTypes from '../../components/UberTypes';

const SearchResults = () => {
  return (
    <View>
      <RouteMap />
      <UberTypes />
    </View>
  );
};
export default SearchResults;
