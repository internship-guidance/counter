import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  view: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#232528',

  },
  subView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#232528',
  },
  counter: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexWrap: "wrap",
    fontSize: 50,
    color: 'white',
    padding: 80,
    margin: 30,
  },
  reset: {
    alignItems: "center",
    textAlign: 'center',
    backgroundColor: '#5B8930',
    fontSize: 30,
    borderRadius: 10,
    overflow: 'hidden',
    color: 'white',
    padding: 10,
    width: 300,
    margin: 5
  },
  plus: {
    backgroundColor: '#8DB255',
    fontSize: 50,
    color: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 60,
    margin: 5
  },
  minus: {
    backgroundColor: '#8DB255',
    fontSize: 50,
    color: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 60,
    margin: 5
  },
  scoreShare: {
    textAlignVertical: "center",
    textAlign: "center",
    backgroundColor: '#5B8930',
    fontSize: 20,
    color: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 5,
    margin: 5,
    height: 50,
    width: 300,
  }
})   