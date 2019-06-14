import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#232528'
  },
  subView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#232528'
  },
  counter: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 80,
    color: 'white',
    padding: 100,
    margin: 10
  },
  reset: {
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#5B8930',
    fontSize: 30,
    borderRadius: 10,
    overflow: 'hidden',
    color: 'white',
    padding: 10,
    width: 365,
    margin: 5
  },
  plus: {
    backgroundColor: '#8DB255',
    fontSize: 50,
    color: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 75,
    margin: 5
  },
  minus: {
    backgroundColor: '#8DB255',
    fontSize: 50,
    color: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 75,
    margin: 5
  },
  scoreShare: {
    backgroundColor: '#8DB205',
    fontSize: 30,
    color: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 5,
    margin: 5,
    height: 50,
    width: 200
  }
});
