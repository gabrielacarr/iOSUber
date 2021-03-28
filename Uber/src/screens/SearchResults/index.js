import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import HomeMap from '../../components/HomeMap';
import UberTypeRow from '../../components/UberTypeRow';
import UberTypes from '../../components/UberTypes';

const SearchResults = () => {
  return (
    <View>
      <HomeMap />
      <UberTypes />
    </View>
  );
};
export default SearchResults;
