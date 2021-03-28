import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const UberTypeRow = () => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={require('../../assets/images/UberX.jpeg')}
      />

      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          UberX {''}
          <Ionicons name={'person'} size={15} />3
        </Text>

        <Text style={styles.time}>8:30 PM drop off</Text>
      </View>

      <View style={styles.rightContainer}>
        <Ionicons name={'pricetag'} size={12} color={'#42d742'} />

        <Text style={styles.price}>est. $27</Text>
      </View>
    </View>
  );
};
export default UberTypeRow;
