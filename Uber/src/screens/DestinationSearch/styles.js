import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
    top: 10,
  },
  textInput: {
    padding: 10,
    backgroundColor: '#50a1ba',
    // opacity: 0.5,
    marginVertical: 5,
    marginLeft: 20,
    borderRadius: 10,
  },
  separator: {
    // backgroundColor: '#efefef',
    // height: 1,
  },
  listView: {
    position: 'absolute',
    top: 105,
  },
  autocompleteContainer: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 9,
    padding: 15,
    backgroundColor: '#a8b5b5',
    borderRadius: 25,
  },
  iconContainer: {
    backgroundColor: '#50a1ba',
    padding: 5,
    borderRadius: 50,
    marginRight: 15,
  },
  locationText: {},
  ///////////////////////////////
  // Circle/ Square/ line
  // left of origin
  //////////////////////////////
  circle: {
    width: 6,
    height: 5,
    backgroundColor: '#c4c4c4',
    position: 'absolute',
    top: 25,
    left: 15,
    borderRadius: 5,
  },
  line: {
    width: 1,
    height: 55,
    backgroundColor: '#c4c4c4',
    position: 'absolute',
    top: 28,
    left: 17,
  },
  square: {
    width: 5,
    height: 5,
    backgroundColor: '#c4c4c4',
    position: 'absolute',
    top: 80,
    left: 15,
  },
});

export default styles;
