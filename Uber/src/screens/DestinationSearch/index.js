import React, {useState} from 'react';
import {View, TextInput, SafeAreaView} from 'react-native';
import styles from './styles';
/***
 * TODO:
 * Location input boxes
 * default locations(home, work)
 * location row
 ***/

const DestinationSearch = () => {
  const [fromText, setFromText] = useState('');
  const [destinationText, setDestinationText] = useState('');
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          value={fromText}
          onChangeText={setFromText}
          style={styles.textInput}
          placeholder="From"
        />

        <TextInput
          value={destinationText}
          onTextChange={setDestinationText}
          style={styles.textInput}
          placeholder="Where to?"
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
