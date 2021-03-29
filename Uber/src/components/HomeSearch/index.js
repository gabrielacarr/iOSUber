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
    <View>
      {/* Input Box */}
      <Pressable onPress={goToSearch} style={styles.inputBox}>
        <Text style={styles.inputText}>Where to? </Text>

        <View style={styles.timeContainer}>
          <AntDesign name={'clockcircle'} size={15} color={'#707070'} />
          <Text>Now</Text>
          <MaterialIcons name={'keyboard-arrow-down'} size={15} />
        </View>
      </Pressable>

      {/* Previous Destination */}
      <View style={styles.row}>
        <View style={[styles.iconContainer, {backgroundColor: '#218cff'}]}>
          <AntDesign name={'clockcircle'} size={19} color={'#fff'} />
        </View>
        <Text style={styles.destinationText}>Previous Destination</Text>
      </View>

      {/* Home Destination */}
      <View style={styles.row}>
        <View style={[styles.iconContainer, {backgroundColor: '#218cff'}]}>
          <Entypo name={'home'} size={19} color={'#fff'} />
        </View>
        <Text style={styles.destinationText}>Home Destination</Text>
      </View>
    </View>
  );
};
export default HomeSearch;
