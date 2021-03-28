import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import UberTypeRow from '../UberTypeRow';

const UberTypes = () => {
  return (
    <View>
      <Text>Uber Type components in the view</Text>
      <UberTypeRow />
    </View>
  );
};
export default UberTypes;
