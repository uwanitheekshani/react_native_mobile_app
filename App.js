import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseConfigProvider } from 'native-base';
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import HomeScreen from './HomeScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import AddPhoneScreen from './screens/AddPhoneScreen';
import RegisterScreen from './screens/RegisterScreen';
// import AddPhoneScreen from './screens/AddPhoneScreen';
// import LoginScreen from './LoginScreen';



const Stack = createStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here
    // For simplicity, let's assume login is successful
    setIsLoggedIn(true);
  };

  return (
    // <NativeBaseConfigProvider>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     {isLoggedIn ? (
    //       <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
    //     ) : (
    //       <Stack.Screen
    //         name="Login"
    //         component={LoginScreen}
    //         options={{ title: 'Login' }}
    //         initialParams={{ onLogin: handleLogin }}
    //       />
    //     )}
    //   </Stack.Navigator>
    // </NavigationContainer>
    // </NativeBaseConfigProvider>


    <>
      {/* <StatusBar style="light"></StatusBar> */}
      {/* <NativeBaseConfigProvider> */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          {isLoggedIn ? (
            <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
            // {/* <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
            // <Stack.Screen name="AddPhone" component={AddPhoneScreen} options={{ title: 'Add Phone' }} /> */}
          ) : (
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ title: 'Login' }}
              initialParams={{ onLogin: handleLogin }}
            />
          )}
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
          <Stack.Screen name="AddPhone" component={AddPhoneScreen} options={{ title: 'AddPhone' }} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Register' }} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* </NativeBaseConfigProvider> */}
    </>
  );
}

// export default App;
