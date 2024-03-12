import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor:"white",
  },
    
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    marginHorizontal: 2,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 5,
  },
  inputContainer: {
    width: '90%',
    marginTop: 20,
  },
  textInput: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 30,
    marginBottom: 30,
    marginTop: 10,
  },
  addButton: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 5,
    width: '80%',
    
  },

  workoutsContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'left',
    backgroundColor:"white",
    paddingHorizontal:20,
    padding:20,
    
},

  workouts: {
    marginTop: 20,
    padding:5,
    
},
  
  workoutDetails: {
    marginTop: 10,
    alignItems: 'left',
    
  },
  workoutText: {
    marginBottom: 10,
  },
});

