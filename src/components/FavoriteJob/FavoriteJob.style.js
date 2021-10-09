import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 5,
    padding: 3,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
  },
  job_name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  location_container: {
    flexWrap: 'wrap',
    marginBottom: 10
  },
  location_name: {
    backgroundColor: '#ef5350',
    borderRadius: 15,
    padding:5,
    color: 'white',
    fontWeight: 'bold'
  },
  job_level: {
    textAlign: 'right',
    color: '#ef5350',
    fontWeight: 'bold',
    marginRight: 10,
  },

  remove_button:{
      marginVertical:10
  },
});
