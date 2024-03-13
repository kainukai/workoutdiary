import React, { useState } from 'react';
import { View, TextInput, Text, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Button } from 'react-native-paper';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native'; 
import styles from '../style/style';

const Home = () => {
    
  const navigation = useNavigation(); 
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');



  const toggleButton = (buttonName) => {
    setSelectedButton(buttonName === selectedButton ? null : buttonName);
  };

  const handleDateSelect = (day) => {
    if (selectedDate === day.dateString) {
      setSelectedDate(null);
    } else {
      setSelectedDate(day.dateString);
    }
  };

  const handlePressOutside = () => {
    Keyboard.dismiss();
  };

  const handleAddWorkout = () => {
    if (!selectedButton || !distance || !duration || !selectedDate) {
      alert('Please fill in all required fields.');
      return; 
    }

    
    const workoutData = {
      workoutType: selectedButton,
      distance,
      duration,
      selectedDate
    };

    
    navigation.navigate('Workouts', { workoutData });
  };

  return (
    <TouchableWithoutFeedback onPress={handlePressOutside}>
      <View style={styles.container}>
        <Text style={styles.text}>Choose your workout</Text>

        <View style={styles.buttonContainer}>
          <Button
            style={[styles.button, selectedButton === 'running' && styles.activeButton]}
            icon="run"
            mode={selectedButton === 'running' ? 'contained' : 'outlined'}
            onPress={() => toggleButton('running')}
          >
            Running
          </Button>
          <Button
            style={[styles.button, selectedButton === 'swimming' && styles.activeButton]}
            icon="swim"
            mode={selectedButton === 'swimming' ? 'contained' : 'outlined'}
            onPress={() => toggleButton('swimming')}
          >
            Swimming
          </Button>
          <Button
            style={[styles.button, selectedButton === 'cycling' && styles.activeButton]}
            icon="bike"
            mode={selectedButton === 'cycling' ? 'contained' : 'outlined'}
            onPress={() => toggleButton('cycling')}
          >
            Cycling
          </Button>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            placeholder="Distance (km)"
            value={distance}
            onChangeText={(text) => setDistance(text)}
          />
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            placeholder="Duration (min)"
            value={duration}
            onChangeText={(text) => setDuration(text)}
          />
        </View>

        <Calendar
          style={{ width: '90%' }}
          onDayPress={(day) => handleDateSelect(day)}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: '#2f95dc' },
          }}
        />

        <Button style={styles.addButton} mode="contained" onPress={handleAddWorkout}>
          Add Workout
        </Button>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Home;
