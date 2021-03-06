import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: '#e7e7e7',

    margin: 10,
    padding: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
  },
  inputText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#6e6e6e',
    marginLeft: 10,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 2,
    borderColor: 'black',
  },
  iconContainer: {
    backgroundColor: '#b3b3b3',
    padding: 12,
    borderRadius: 25,
  },
  destinationText: {
    marginLeft: 10,
    fontWeight: '600',
    fontSize: 15,
    color: '#e6f3f7',
  },
});
export default styles;
