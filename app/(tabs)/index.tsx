import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Linking, Alert } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';

const pains = [
  { id: '1', name: 'Back Pain', exercises: ['Stretching', 'Yoga'], website: 'https://www.example.com/back-pain' },
  { id: '2', name: 'Knee Pain', exercises: ['Knee Strengthening', 'Cycling'], website: 'https://www.example.com/knee-pain' },
  { id: '3', name: 'Shoulder Pain', exercises: ['Shoulder Rotation', 'Resistance Band'], website: 'https://www.example.com/shoulder-pain' },
];

export default function MainPage() {
  const [selectedPain, setSelectedPain] = useState<any>(null);
  const [user, setUser] = useState({ name: '', streak: '' });
  const route = useRoute();
  const { userId}:any = route.params || {}; // Get userId from route params
  console.log(userId)
  useEffect(() => {
    if (userId) {
      const fetchUserData = async () => {
        try {
          const response = await axios.get(`http://192.168.29.23:5000/api/app/user/${userId}`);
          console.log(response.data)
          if (!response) {
            throw new Error('Network response was not ok');
          }
          const data = await response.data.response;
          setUser({ name: data.name, streak: data.streak });
        } catch (error) {
          console.error('Error fetching user data:', error);
          Alert.alert('An error occurred while fetching user details');
        }
      };

      fetchUserData();
    }
  }, [userId]);

  const handlePainSelect = (pain:any) => {
    setSelectedPain(pain);
  };

  const handleWebsiteVisit = (url:any) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconContainer}>
          <FontAwesome name="user" size={24} color="black" />
          <Text style={styles.iconText}>{user.name || 'Loading...'}</Text>
        </TouchableOpacity>
        <View style={styles.streakContainer}>
          <MaterialIcons name="whatshot" size={24} color="orange" />
          <Text style={styles.iconText}>{user.streak || 'Loading...'}</Text>
        </View>
      </View>

      {/* Pain Selection Section */}
      <Text style={styles.sectionTitle}>Select Your Pain</Text>
      <FlatList
        data={pains}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.painItem} onPress={() => handlePainSelect(item)}>
            <Text style={styles.painText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />

      {/* Exercise and Website Section */}
      {selectedPain && (
        <View style={styles.exerciseContainer}>
          <Text style={styles.sectionTitle}>Exercises for {selectedPain.name}</Text>
          {selectedPain.exercises.map((exercise:any, index:number) => (
            <Text key={index} style={styles.exerciseText}>{exercise}</Text>
          ))}
          <TouchableOpacity onPress={() => handleWebsiteVisit(selectedPain.website)}>
            <Text style={styles.websiteLink}>Visit website for more info</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    padding: 16,
    backgroundColor: '#f4f4f4',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  streakContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    marginLeft: 8,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  painItem: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    marginBottom: 10,
    borderRadius: 8,
  },
  painText: {
    fontSize: 16,
  },
  exerciseContainer: {
    marginTop: 20,
  },
  exerciseText: {
    fontSize: 16,
    marginBottom: 8,
  },
  websiteLink: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});
