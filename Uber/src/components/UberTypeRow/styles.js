import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    bottom: 20,
    // top: 20,
    backgroundColor: '#F9F9F9',
    // backgroundColor: 'red',
    // borderTopLeftRadius: 18,
    // borderTopRightRadius: 18,
  },
  image: {
    height: 55,
    width: 80,
    resizeMode: 'contain',
    // borderRadius: 45,
  },
  middleContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  type: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 1,
  },
  time: {
    color: '#5d5d5d',
  },
  rightContainer: {
    width: 100,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 5,
  },
});

export default styles;
