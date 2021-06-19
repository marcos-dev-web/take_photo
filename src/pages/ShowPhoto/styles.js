import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f3f5',
    padding: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: 'rgba(44, 80, 242, 0.8)',
  },
  photo: {
    width: '100%',
    height: 400,
    backgroundColor: 'rgba(0,0,0,.2)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  button: {
    width: '100%',
    backgroundColor: 'rgba(44, 80, 242, 0.8)',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
  }
})

export default styles;