// import { View, FlatList, TouchableOpacity, StyleSheet, Image} from 'react-native';
// import React, { useEffect, useState } from 'react'
// import { NativeBaseProvider, VStack, HStack, Heading, Text, Container, Center } from "native-base";
// import TouchableCard from './../components/TouchableCard';

// export default function Home({navigation}) {
//     const [posts, setPosts] = useState([]);

//     // useEffect(() => {
//     //     fetch('http://192.168.8.167:4000/vehicle')
//     //         .then((response) => response.json())
//     //         .then((json) => setPosts(json));
//     // })

//   return (
//     <NativeBaseProvider>
//         <Center>
//         <View style={style.container}>
//             <FlatList
//                 data={posts}
//                 renderItem={({ item }) =>
//                     <TouchableCard data={item} nav={navigation}/>
//                 }
//             />
//         </View>
//         </Center>
//     </NativeBaseProvider>
//   );
// }

// const style = StyleSheet.create({
//     container:{
//         paddingTop: 20, 
//         paddingHorizontal: 20,
//         // width:'80%'
//     },

//     card:{
//         // borderWidth:1,
//         marginBottom:'5%',
//         padding:5,
//         backgroundColor:"white",
//         borderRadius: 10,

//         shadowColor: "#fff",
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 10,

//         elevation: 5,
//     },

//     logo: {
//         width: 100,
//         height: 100,
//         resizeMode:"contain",
//         // backgroundColor:"pink"
//       },
// })




import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, Button, ImageBackground, StyleSheet } from 'react-native';
import axios from 'axios';
import backgroundImage from '../assets/city-lights-through-rain-window.jpg'
import Icon from 'react-native-vector-icons/Ionicons';



const HomeScreen = ({ navigation }) => {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        // axios.get('http://your-backend-url/phones').then(response => {
        //   setPhones(response.data);
        // }).catch(error => {
        //   console.error('Error fetching phones:', error);
        // });
        const mockPhones = [
            { id: 1, model: 'Phone Model 1', description: 'Description 1', image: 'image_url_1' },
            { id: 2, model: 'Phone Model 2', description: 'Description 2', image: 'image_url_2' },
            { id: 3, model: 'Phone Model 3', description: 'Description 3', image: 'image_url_3' },
            // Add more mock data as needed
        ];
        setPhones(mockPhones);
    }, []);

    const handleAddPhone = () => {
        navigation.navigate('AddPhone');
    };

    const handleUpdate = (id) => {
        // Implement the logic to handle updating the item with the specified id
    };

    const handleDelete = (id) => {
        // Implement the logic to handle deleting the item with the specified id
    };

    const renderPhoneItem = ({ item }) => (
        <View style={styles.phoneItem}>
            <View style={styles.card}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={styles.descriptionContainer}>
                    <Text style={styles.model}>{item.model}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <View style={styles.buttonContainer}>
                        <Icon name="create-outline" size={24} color="blue" onPress={() => handleUpdate(item.id)} />
                        <Icon name="trash-outline" size={24} color="red" onPress={() => handleDelete(item.id)} />
                    </View>
                </View>
            </View>
        </View>
    );

    return (
        // <View>
        // <ImageBackground source={backgroundImage}>
        //   <Text>Phone List</Text>
        //   <FlatList
        //     data={phones}
        //     keyExtractor={(item) => item.id.toString()}
        //     renderItem={({ item }) => (
        //       <View>
        //         <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
        //         <Text>Model: {item.model}</Text>
        //         <Text>Description: {item.description}</Text>
        //       </View>
        //     )}
        //   />
        //   <Button title="Add Phone" onPress={handleAddPhone} />
        //   </ImageBackground>
        // {/* </View> */}
        
        <ImageBackground source={backgroundImage} style={styles.container}>

            <View style={styles.buttonContainer}>
                <Text style={styles.heading}>Phone List</Text>
                <Button title="Add Phone" onPress={handleAddPhone} />
            </View>

            {/* <FlatList
      data={phones}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.phoneItem}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text>Model: {item.model}</Text>
          <Text>Description: {item.description}</Text>
        </View>
      )}
    /> */}
            <FlatList
                data={phones}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderPhoneItem}
            />

        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'cover', // or 'stretch' for different image behavior
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#fff', // Text color
    },

    buttonContainer: {
        marginVertical: 10,
        alignItems: 'center',
    },

    phoneItem: {
        marginBottom: 20,
        alignItems: 'center',
        width: '100%',
    },
    card: {
        backgroundColor: '#FFFFFF', // White background color
        borderRadius: 10,
        padding: 10,
        width: '100%', // Adjust width as needed
        maxWidth: 400,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    descriptionContainer: {
        alignItems: 'center',
    },
    model: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    description: {
        fontSize: 14,
    },
});

export default HomeScreen;
