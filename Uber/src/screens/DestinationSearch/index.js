import React, {useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import styles from './styles';

const DestinationSearch = () => {
  const [fromText, setFromText] = useState('');
  const [destinationText, setDestinationText] = useState('');
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="From"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setDestinationPlace({data, details});
          }}
          styles={{
            textInput: styles.textInput,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyCvkTcVKIt8528UDp__D - S_du5zd__jE14',
            language: 'en',
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setDestinationPlace({data, details});
          }}
          styles={{
            textInput: styles.textInput,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyCvkTcVKIt8528UDp__D - S_du5zd__jE14',
            language: 'en',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
