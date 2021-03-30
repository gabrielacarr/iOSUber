import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Ionicons name={'ios-warning-outline'} size={20} />
        <Text> </Text>
        Help keep your community safe
      </Text>
      <Text style={styles.text}>
        Our policy requires everyone to wear a face cover or mask. Please
        confirm your ride if you follow actions based on CDC guidelines and we
        will let your drivers know.
      </Text>
      <Text style={styles.learnMore}>COVID-19 Safety Center</Text>
    </View>
  );
};
export default CovidMessage;
