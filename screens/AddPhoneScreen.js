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
import { View, Text, StyleSheet, Image, TextInput, Button, FlatList, Alert, ImageBackground, TouchableHighlight } from 'react-native';
import axios from 'axios';
import cartImage from '../assets/20807890.jpg'
import ImagePicker from 'react-native-image-picker';

const AddPhoneScreen = ({ navigation }) => {
    const [phones, setPhones] = useState([]);
    const [phoneModel, setPhoneModel] = useState('');
    const [description, setDescription] = useState('');
    const [code, setCode] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);

    // useEffect(() => {
    //     fetchPhones();
    // }, []);

    // const fetchPhones = () => {
    //     // axios.get('http://your-backend-url/phones')
    //     //   .then(response => {
    //     //     setPhones(response.data);
    //     //   })
    //     //   .catch(error => {
    //     //     console.error('Error fetching phones:', error);
    //     //   });
    // };

    const handleAddPhone = async () => {
        const payload = {
            phoneCode: code,
            phoneModel: phoneModel,
            phoneDescription: description,
            phonePrice: price,
        };
        try {
            const response = await axios.post('http://localhost:3500/api/v1/savePhone', payload);
            console.log('Response:', response.data);
            // Check response status and handle accordingly
            if (response.status === 201) {
                // Phone added successfully
                console.log('Phone added successfully:', response.data.phone);
                // Do something with the added phone data if needed
            } else {
                console.error('Error adding phone:', response.data.error);
                // Handle other status codes (e.g., 400 for phone already exists, 500 for server error)
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle network errors or other exceptions
        }
    };
    




    // const pickImage = () => {

    // };




    // const renderItem = ({ item }) => (
    //     <View style={styles.phoneItem}>
    //         <Image source={{ uri: item.image }} style={styles.image} />
    //         <View style={styles.details}>
    //             <Text>Model: {item.model}</Text>
    //             <Text>Description: {item.description}</Text>
    //         </View>
    //         <Button title="Delete" onPress={() => handleDeletePhone(item.id)} />
    //     </View>
    // );

    return (
        // <View style={styles.container}>
        <ImageBackground source={cartImage} style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.text}>Add Phone</Text>
                <TextInput
                    placeholder="Phone Code"
                    value={code}
                    onChangeText={setCode}
                    style={styles.input}
                    placeholderTextColor="white"
                />
                <TextInput
                    placeholder="Phone Model"
                    value={phoneModel}
                    onChangeText={setPhoneModel}
                    style={styles.input}
                    placeholderTextColor="white"
                />
                <TextInput
                    placeholder="Description"
                    value={description}
                    onChangeText={setDescription}
                    style={styles.input}
                    placeholderTextColor="white"
                />
                <TextInput
                    placeholder="Price"
                    value={price}
                    onChangeText={setPrice}
                    style={styles.input}
                    placeholderTextColor="white"
                />
                {/* <Button style={styles.btn} title="Pick Image" onPress={pickImage} /> */}

                <View style={styles.buttonSpacing} />
                {/* <Button  style={[styles.btn, { backgroundColor: '#e74c3c' }]} title="Add Phone" onPress={handleAddPhone} /> */}
                <TouchableHighlight
                    style={[styles.btn, { backgroundColor: '#8BC34A', height: '10%', width: '40%', alignItems: 'center', justifyContent: 'center' }]}
                    underlayColor="#70A843"
                    onPress={handleAddPhone}
                >
                    <Text style={styles.btnText}>Add Phone</Text>
                </TouchableHighlight>
            </View>

            {/* <FlatList
                data={phones}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            /> */}

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
    text: {
        color: 'white',
        fontSize: 20,
    },
    btn: {
        borderRadius: 100,
        marginBottom: 10,
    },
    card: {
        backgroundColor: '#30336b',
        borderRadius: 10,
        padding: 20,
        margin: 10,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: '80%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        color: "white"
    },
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
    buttonSpacing: {
        marginBottom: 10,
    },
});

export default AddPhoneScreen;
