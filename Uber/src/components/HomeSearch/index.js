import React from 'react';
import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const HomeSearch = () => {
  return (
    <View>
      {/* Input Box */}
      <View style={styles.inputBox}>
        <Text style={styles.inputText}>Where to? </Text>

        <View style={styles.timeContainer}>
          <AntDesign name={'clockcircle'} size={15} color={'#707070'} />
          <Text>Now</Text>
          <MaterialIcons name={'keyboard-arrow-down'} size={15} />
        </View>
      </View>
      {/* Previous Destination */}

      {/* Home Destination */}
    </View>
  );
};
export default HomeSearch;
