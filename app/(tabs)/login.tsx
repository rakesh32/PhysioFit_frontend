import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import userService from '../../service/user-service'
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigation = useNavigation<String>();

  axios.defaults.withCredentials = true;

  const handleSubmit = async () => {
    // Validate email and password
    if (!email || !password) {
      Alert.alert('Please enter email and password');
      return;
    }
    const payload = {
      email,
      password
    }
    // Make API request to validate credentials
    try{
      const res = await userService.login(payload)
    if (res.response.Login) {
      const match_user_id = res.response._id;
      if (match_user_id) {
        navigation.navigate('index',{ userId: match_user_id });  // Navigate to index in the tabs folder
      } else {
        // navigation.navigate('tabs');  // Navigate to the main tab navigator
        Alert.alert('user not found')
      }
    } else {
      Alert.alert('Invalid credentials');
    }
    }catch(e){
      console.log(e)
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.header}>Login</Text>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            autoComplete="off"
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
            // required
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            secureTextEntry
            onChangeText={setPassword}
            value={password}
            // required
          />
        </View>
        <Button title="Login" onPress={handleSubmit} />
        <View style={styles.footer}>
          <Text>Don't Have an Account?</Text>
          {/* <Button title="Register" onPress={() => navigation.navigate('Register')} /> */}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  card: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    elevation: 3,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputGroup: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default Login;