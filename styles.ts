import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: getStatusBarHeight(),      
  },

  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent:'space-around',
    alignItems: 'center',
  },
  result: {
    flex: 2,
    backgroundColor: '#ccc',
    justifyContent:'center',
    alignItems:'flex-end'
  },
  
  resultText: {
    fontSize: 30,
    color: '#333B4D',
  },

  calculation: {
    flex: 1,
    backgroundColor: '#ccc',
    justifyContent:'center',
    alignItems:'flex-end'
  },

  calculationText:{ 
    fontSize: 24,
    color: 'white',
  },

  btn: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  txt: {
    fontSize: 24,
    color: 'white',
  },
  buttons: {
    flex:7,
    flexDirection: 'row',
  },

  numbers: {
    flex:3,
    backgroundColor: '#5b5b5b'
  },

  operations: {
    flex: 1,
    justifyContent:'space-around',
    alignItems: 'center',
    backgroundColor: '#5B9298'
  },

})

export { styles }