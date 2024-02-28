import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NativeBaseProvider, VStack, Heading, Input, Button, HStack } from 'native-base';
import axios from 'axios';
import loginImage from '../assets/6343845.jpg'

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // axios.post('http://your-backend-url/login', {
    //   email,
    //   password,
    // })
    // .then(response => {
    //   // Handle successful login response
    //   console.log(response.data);
    //   // Navigate to HomeScreen or perform other actions
    // })
    // .catch(error => {
    //   // Handle login error
    //   console.error('Login error:', error);
    //   // Display error message to user
    // });
    navigation.navigate('Home');
  };

  return (
    <NativeBaseProvider>
      <VStack style={style.container} space={5}>
        <Heading style={style.heading} size="xl" color="blue.500" bold>
        ELITE MOBILE
        </Heading>
        <Image
          style={{ marginBottom: '5%', width: '70%', height: '30%', resizeMode: 'cover' }}
          source={loginImage}
        />
        <Input mx="3" placeholder="Email" w="80%"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          type={false ? 'text' : 'password'}
          mx="3"
          placeholder="Password"
          w="80%"
          value={password}
          onChangeText={setPassword}
        />
        <Button
          style={style.btn}
          // onPress={() => {
          //   // navigation.navigate('Root');
          // }}
          onPress={handleLogin}
          w="50%">
          Login
        </Button>

        <HStack style={{ alignItems: 'center' }}>
          <Text style={{ marginTop: '15%' }}>Don’t have an account?</Text>
          <Button
            style={{ marginTop: '15%' }}
            variant="link"
            onPress={() => {
              navigation.navigate('Register');
            }}>
            Register
          </Button>
        </HStack>
      </VStack>
    </NativeBaseProvider>
  );
};

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },

  heading: {
    marginBottom: 30
  },

  btn: {
    backgroundColor: "#469AFF",
  },
});

export default LoginScreen;

