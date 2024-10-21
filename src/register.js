import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import api from './api';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await api.post('register.php', {
        username,
        email,
        password,
      });

      Alert.alert(response.data.message);
    } catch (error) {
      Alert.alert('Error al registrar');
    }
  };

  return (
    <View>
      <TextInput placeholder="Username" value={username} onChangeText={setUsername} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default Register;
