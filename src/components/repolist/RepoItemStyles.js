import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    width: '100%',
    maxWidth: 600,
    padding: 10,
    minHeight: Platform.OS === 'web' ? 180 : 160,
    maxHeight: Platform.OS === 'web' ? 200 : 180,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flex: 1,
    justifyContent: 'space-between',
  },
  textContainer: {
    marginTop: 20,
    marginBottom: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  description: {
    fontSize: 16,
  },
  noDescription: {
    fontSize: 16,
    color: 'grey',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  owner: {
    fontSize: 16,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stars: {
    fontSize: 16,
    color: 'black',
    marginLeft: 5,
  },
  icon: {
    marginTop: 2,
  },
});

export default styles;
