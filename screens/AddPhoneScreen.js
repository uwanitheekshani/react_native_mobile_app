// import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { NativeBaseProvider, ScrollView,Center, VStack, Input, TextArea, Button } from "native-base";
// import { FloatingAction } from "react-native-floating-action";
// import AddVehicleForm from './../components/AddVehicleForm';

// export default function AddVehicle(props) {

//   return (
//     <AddVehicleForm />
//   );
// }


import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, FlatList, Alert, ImageBackground } from 'react-native';
import axios from 'axios';
import cartImage from '../assets/20807890.jpg'

const AddPhoneScreen = ({ navigation }) => {
    const [phones, setPhones] = useState([]);
    const [phoneModel, setPhoneModel] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    useEffect(() => {
        fetchPhones();
    }, []);

    const fetchPhones = () => {
        // axios.get('http://your-backend-url/phones')
        //   .then(response => {
        //     setPhones(response.data);
        //   })
        //   .catch(error => {
        //     console.error('Error fetching phones:', error);
        //   });
    };

    const handleAddPhone = () => {
        // const formData = new FormData();
        // formData.append('image', {
        //   uri: image,
        //   name: 'image.jpg',
        //   type: 'image/jpeg',
        // });
        // formData.append('model', phoneModel);
        // formData.append('description', description);

        // axios.post('http://your-backend-url/phones/add', formData, {
        //   headers: {
        //     'Content-Type': 'multipart/form-data',
        //   },
        // })
        //   .then(() => {
        //     Alert.alert('Success', 'Phone added successfully');
        //     fetchPhones(); // Refresh phone list after adding a phone
        //   })
        //   .catch(error => {
        //     console.error('Error adding phone:', error);
        //     Alert.alert('Error', 'Failed to add phone');
        //   });
    };

    const pickImage = () => {

    }

    const handleDeletePhone = (id) => {
        // axios.delete(`http://your-backend-url/phones/${id}`)
        //   .then(() => {
        //     Alert.alert('Success', 'Phone deleted successfully');
        //     fetchPhones(); // Refresh phone list after deleting a phone
        //   })
        //   .catch(error => {
        //     console.error('Error deleting phone:', error);
        //     Alert.alert('Error', 'Failed to delete phone');
        //   });
    };

    const renderItem = ({ item }) => (
        <View style={styles.phoneItem}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.details}>
                <Text>Model: {item.model}</Text>
                <Text>Description: {item.description}</Text>
            </View>
            <Button title="Delete" onPress={() => handleDeletePhone(item.id)} />
        </View>
    );

    return (
        // <View style={styles.container}>
        <ImageBackground source={cartImage} style={styles.container}>
            <View style={styles.card}>
                <Text>Add Phone</Text>
                <TextInput
                    placeholder="Phone Model"
                    value={phoneModel}
                    onChangeText={setPhoneModel}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Description"
                    value={description}
                    onChangeText={setDescription}
                    style={styles.input}
                />
                <Button title="Pick Image" onPress={pickImage} />
                <Button title="Add Phone" onPress={handleAddPhone} />
            </View>

            <FlatList
                data={phones}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />

            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        </ImageBackground>
        // </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'cover', // or 'stretch' for different image behavior
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        margin: 10,
        width: '80%',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    // input: {
    //     width: '80%',
    //     height: 40,
    //     borderWidth: 1,
    //     borderColor: 'gray',
    //     marginBottom: 10,
    //     paddingHorizontal: 10,
    // },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    phoneItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    details: {
        flex: 1,
        marginRight: 10,
    },
});

export default AddPhoneScreen;
