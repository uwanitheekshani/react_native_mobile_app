// import { View,StyleSheet, Image } from 'react-native'
// import React from 'react'
// import { NativeBaseProvider, Box, Button, Switch, VStack, TextArea,Heading, Text, Input, HStack } from "native-base";

// export default function Login({navigation}) {
//   return (
//     <NativeBaseProvider>
//       <VStack style={style.container} space={5}>
//         <Heading style={style.heading} size="xl" color="blue.500" bold>
//           WELCOME BACK
//         </Heading>
//         <Image
//           style={{marginBottom: '10%'}}
//           // source={require('../assets/img/login.png')}
//         />
//         <Input mx="3" placeholder="Email" w="80%" />
//         <Input
//           type={false ? 'text' : 'password'}
//           mx="3"
//           placeholder="Password"
//           w="80%"
//         />
//         <Button
//           style={style.btn}
//           onPress={() => {
//             navigation.navigate('Root');
//           }}
//           w="50%">
//           Login
//         </Button>

//         <HStack style={{alignItems: 'center'}}>
//           <Text style={{marginTop: '15%'}}>Don’t have an account?</Text>
//           <Button
//             style={{marginTop: '15%'}}
//             variant="link"
//             onPress={() => {
//               navigation.navigate('Register');
//             }}>
//             Register
//           </Button>
//         </HStack>
//       </VStack>
//     </NativeBaseProvider>
//   );
// }

// const style = StyleSheet.create({
//   container:{
//     justifyContent:'center',
//     alignItems:'center',
//     // marginTop: '10%',
//     backgroundColor:'white',
//     flex: 1,
//    },

//    heading:{
//     marginBottom: 30
//    },

//    btn:{
//     backgroundColor:"#469AFF",

//    },
// })





// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Image } from 'react-native';
// import {NativeBaseProvider, VStack, Heading, Input, Button, HStack } from 'native-base';
// import axios from 'axios';

// export default function LoginScreen({navigation}) {
//   // const [email, setEmail] = useState('');
//   // const [password, setPassword] = useState('');

//   // const handleLogin = () => {
//     // axios.post('http://your-backend-url/login', {
//     //   email,
//     //   password,
//     // })
//     // .then(response => {
//     //   // Handle successful login response
//     //   console.log(response.data);
//     //   // Navigate to HomeScreen or perform other actions
//     // })
//     // .catch(error => {
//     //   // Handle login error
//     //   console.error('Login error:', error);
//     //   // Display error message to user
//     // });
//   // };

//   return (
//     //     <View style={styles.container}>
//     //       <VStack space={5}>
//     //         <Heading size="xl" color="blue.500" bold>
//     //           WELCOME BACK
//     //         </Heading>
//     //         <Image
//     //           style={{ marginBottom: '10%' }}
//     //           // source={require('../assets/img/login.png')}
//     //         />
//     //         <Input
//     //           mx="3"
//     //           placeholder="Email"
//     //           w="80%"
//     //           value={email}
//     //           onChangeText={setEmail}
//     //         />
//     //         <Input
//     //           type={false ? 'text' : 'password'}
//     //           mx="3"
//     //           placeholder="Password"
//     //           w="80%"
//     //           value={password}
//     //           onChangeText={setPassword}
//     //         />
//     //         <Button
//     //           style={styles.btn}
//     //           onPress={handleLogin}
//     //           w="50%">
//     //           Login
//     //         </Button>

//     //         <HStack style={{ alignItems: 'center' }}>
//     //           <Text style={{ marginTop: '15%' }}>Don’t have an account?</Text>
//     //           <Button
//     //             style={{ marginTop: '15%' }}
//     //             variant="link"
//     //             onPress={() => {
//     //               // Navigation to RegisterScreen or other actions
//     //             }}>
//     //             Register
//     //           </Button>
//     //         </HStack>
//     //       </VStack>
//     //     </View>
//     //   );
//     // };

//     // const styles = StyleSheet.create({
//     //   container: {
//     //     justifyContent: 'center',
//     //     alignItems: 'center',
//     //     backgroundColor: 'white',
//     //     flex: 1,
//     //   },
//     //   btn: {
//     //     backgroundColor: "#469AFF",
//     //   },
//     // });

//     <NativeBaseProvider>
//       <VStack style={style.container} space={5}>
//         <Heading style={style.heading} size="xl" color="blue.500" bold>
//           WELCOME BACK
//         </Heading>
//         <Image
//           style={{ marginBottom: '10%' }}
//           // source={require('../assets/img/login.png')}
//         />
//         <Input mx="3" placeholder="Email" w="80%" />
//         <Input
//           type={false ? 'text' : 'password'}
//           mx="3"
//           placeholder="Password"
//           w="80%"
//         />
//         <Button
//           style={style.btn}
//           onPress={() => {
//             // navigation.navigate('Root');
//           }}
//           w="50%">
//           Login
//         </Button>

//         <HStack style={{ alignItems: 'center' }}>
//           <Text style={{ marginTop: '15%' }}>Don’t have an account?</Text>
//           <Button
//             style={{ marginTop: '15%' }}
//             variant="link"
//             onPress={() => {
//               // navigation.navigate('Register');
//             }}>
//             Register
//           </Button>
//         </HStack>
//       </VStack>
//     </NativeBaseProvider>
//   );
// }

// const style = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     // marginTop: '10%',
//     backgroundColor: 'white',
//     flex: 1,
//   },

//   heading: {
//     marginBottom: 30
//   },

//   btn: {
//     backgroundColor: "#469AFF",

//   },
// })

// export default LoginScreen;

import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NativeBaseProvider, VStack, Heading, Input, Button, HStack } from 'native-base';
import axios from 'axios';

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
          WELCOME BACK
        </Heading>
        <Image
          style={{ marginBottom: '10%' }}
        // source={require('../assets/img/login.png')}
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
              // navigation.navigate('Register');
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

