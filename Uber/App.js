/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {SafeAreaView, StatusBar} from 'react-native';

// import HomeScreen from './src/screens/HomeScreen';
import DestinationSearch from './src/screens/DestinationSearch';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        <DestinationSearch />
      </SafeAreaView>
    </>
  );
};

export default App;
