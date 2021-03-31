import React from 'react';
import {Pressable, View, Text} from 'react-native';
import UberTypeRow from '../UberTypeRow';
import typesData from '../../assets/data/types';

const UberTypes = () => {
  const confirm = () => {
    console.warn('confirm');
  };
  return (
    <View>
      {typesData.map(type => (
        <UberTypeRow type={type} key={type.id} />
      ))}
      <Pressable
        onPress={confirm}
        style={{
          backgroundColor: 'black',
          padding: 7,
          margin: 10,
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Confirm Uber</Text>
      </Pressable>
    </View>
  );
};
export default UberTypes;
