import React from 'react';
import {View, Text, Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

const HomeSearch = () => {
  const navigation = useNavigation();

  const goToSearch = () => {
    navigation.navigate('DestinationSearch');
  };

  return (
    <View style={{backgroundColor: 'black', top: 2}}>
      {/* Input Box */}
      <Pressable onPress={goToSearch} style={styles.inputBox}>
        <Text style={styles.inputText}>Let's find a ride </Text>

        <View style={styles.timeContainer}>
          <AntDesign name={'clockcircle'} size={15} color={'#707070'} />
          <Text>Now</Text>
          <MaterialIcons name={'keyboard-arrow-down'} size={15} />
        </View>
      </Pressable>

      {/* Home Destination */}
      <View style={styles.row}>
        <View
          style={[
            styles.iconContainer,
            {backgroundColor: '#3ba7d1'},
            {bottom: 10},
          ]}>
          <Entypo name={'home'} size={19} color={'#fff'} />
        </View>
        <Text style={[styles.destinationText, {bottom: 10}]}>
          Home Destination
        </Text>
      </View>

      {/* Explore the city || Destination Text */}
      <View style={styles.row}>
        <View
          style={[
            styles.iconContainer,
            {backgroundColor: '#3ba7d1'},
            {bottom: 30},
          ]}>
          <AntDesign name={'search1'} size={19} color={'#fff'} />
        </View>
        <Text style={[styles.destinationText, {bottom: 30}]}>
          Explore the city
        </Text>
      </View>
    </View>
  );
};
export default HomeSearch;
