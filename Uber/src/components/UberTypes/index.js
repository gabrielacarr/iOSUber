import React from 'react';
import {Pressable, View, Text} from 'react-native';
import UberTypeRow from '../UberTypeRow';
import typesData from '../../assets/data/types';
import styles from './styles';
const UberTypes = () => {
  const confirm = () => {
    console.warn('confirm');
  };
  return (
    <View style={styles.background}>
      <View style={{bottom: 50, top: 5}}>
        {typesData.map(type => (
          <UberTypeRow type={type} key={type.id} />
        ))}
        <Pressable
          onPress={confirm}
          style={{
            backgroundColor: '#3ba7d1',
            padding: 27,
            margin: 0,
            top: -40,

            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            Confirm your ride
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
export default UberTypes;
