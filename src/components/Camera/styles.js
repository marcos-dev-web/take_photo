import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  preview: {
    position: 'relative',
    backgroundColor: 'red',
    borderRadius: 5,
    overflow: 'hidden',
  },
  capture: {
    position: 'absolute',
    bottom: 5,
    width: 100,
    height: 100,
    backgroundColor: 'rgba(220,220,220,0.5)',
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: '#ffffff',
    borderRadius: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white'
  }
});

export default styles;