import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary </Text>
      <Text style={styles.text}>
        We're reminding everyone who uses Uber to follow advice from public
        health authorities. If you're sick, stay home and away from others. Wash
        your hands frequently, and cover your cough or sneeze.
      </Text>
      <Text style={styles.learnMore}>Learn more </Text>
    </View>
  );
};
export default CovidMessage;
