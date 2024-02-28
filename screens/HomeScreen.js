import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, Button, Modal, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import backgroundImage from '../assets/city-lights-through-rain-window.jpg'
import Icon from 'react-native-vector-icons/Ionicons';
import iphone1 from '../assets/apple 1.png'
import samsung from '../assets/samsung.png'
import huwawei from '../assets/Huwawi.png'



const HomeScreen = ({ navigation }) => {
    const [phones, setPhones] = useState([]);
    const [selectedPhone, setSelectedPhone] = useState(null);
    const [updatedModel, setUpdatedModel] = useState('');
    const [updatedDescription, setUpdatedDescription] = useState('');
    const [updatedPrice, setUpdatedPrice] = useState('');

    const [showAlert, setShowAlert] = useState(false);

    const handleUpdate = () => {
        // Update logic here using selectedPhone, updatedModel, updatedDescription, and updatedPrice
        // After updating, you can close the modal
        setSelectedPhone(null);
    };


    useEffect(() => {
        // axios.get('http://your-backend-url/phones').then(response => {
        //   setPhones(response.data);
        // }).catch(error => {
        //   console.error('Error fetching phones:', error);
        // });
        const mockPhones = [
            { id: 1, model: 'Apple iPhone 15', description: 'The best price of Apple iPhone 15 in Sri Lanka is Rs. 245,000 sold at Xmobile with 1 Year Apple Care Warranty.', price: 'Price Range : Rs. 245,000 to Rs. 431,000', image: iphone1 },
            { id: 2, model: 'Samsung Galaxy S22 5G', description: 'The best price of Samsung Galaxy S22 5G in Sri Lanka is Rs. 159,000 sold at Xmobile with 1 Year Company Warranty.', price: 'Price Range : Rs. 159,000 to Rs. 179,900 ', image: samsung },
            { id: 3, model: 'Huawei P50 Pro', description: 'The best price of Huawei P50 Pro in Sri Lanka is Rs. 224,900 sold at Dealz Woot with 1 Year Company Warranty.', price: 'Best Price : Rs. 224,900', image: huwawei },
            // Add more mock data as needed
        ];
        setPhones(mockPhones);
    }, []);


    const handleDelete = (id) => {
        // Filter out the selected phone from the phones state array
        const updatedPhones = phones.filter(phone => phone.id !== id);
        // Update the state to reflect the changes
        setPhones(updatedPhones);
        // Alert.alert('Success', 'Phone deleted successfully');
        setShowAlert(true); 
    };

    const handleAddPhone = () => {
        navigation.navigate('AddPhone');
    };

    // const handleUpdate = (id) => {
    //     // Implement the logic to handle updating the item with the specified id
    // };

    // const handleDelete = (id) => {
    //     // Implement the logic to handle deleting the item with the specified id
    // };

    const renderPhoneItem = ({ item }) => (
        <View style={styles.phoneItem}>
            <View style={styles.card}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.descriptionContainer}>
                    <Text style={styles.model}>{item.model}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                    <View style={styles.buttonContainer}>
                        {/* <Icon name="create-outline" size={24} color="blue" onPress={() => handleUpdate(item.id)} /> */}
                        <TouchableOpacity onPress={() => setSelectedPhone(item)}>
                            <Icon name="create-outline" size={24} color="blue" />
                        </TouchableOpacity>
                        <Icon name="trash-outline" size={24} color="red" onPress={() => handleDelete(item.id)} />

                        <Modal
                            visible={showAlert}
                            transparent
                            animationType="fade"
                            onRequestClose={() => setShowAlert(false)}
                        >
                            <View style={styles.modalContainer}>
                                <View style={styles.alertContainer}>
                                    <Text style={styles.alertTitle}>Phone Deleted</Text>
                                    <Text style={styles.alertMessage}>The phone has been successfully deleted.</Text>
                                    <TouchableOpacity onPress={() => setShowAlert(false)}>
                                        <Text style={styles.alertButton}>OK</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>
                    </View>
                </View>
            </View>
        </View>
    );

    return (
        <ImageBackground source={backgroundImage} style={styles.container}>

            <View style={styles.buttonContainer}>
                <Text style={styles.heading}>Phone List</Text>
                <Button title="Add Phone" onPress={handleAddPhone} />
            </View>

            <FlatList
                data={phones}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderPhoneItem}
            />

            <Modal visible={selectedPhone !== null} transparent={true} animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.card2}>
                        <TextInput
                            placeholder="Phone Model"
                            value={updatedModel}
                            onChangeText={setUpdatedModel}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Description"
                            value={updatedDescription}
                            onChangeText={setUpdatedDescription}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Price"
                            value={updatedPrice}
                            onChangeText={setUpdatedPrice}
                            style={styles.input}
                        />
                        <View style={styles.buttonContainer2}>
                            <TouchableOpacity onPress={handleUpdate} style={[styles.button, styles.updateButton]}>
                                <Text style={styles.buttonText}>Update</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setSelectedPhone(null)} style={[styles.button, styles.cancelButton]}>
                                <Text style={styles.buttonText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>


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
        justifyContent: 'center',
        width: '100%',
    },
    card: {
        backgroundColor: '#FFFFFF', // White background color
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 400, // Adjust width as needed
        // maxWidth: 400,
    },
    image: {
        marginBottom: 10,
        resizeMode: 'cover'
    },
    descriptionContainer: {
        alignItems: 'center',
    },
    price: {
        alignItems: 'center',
        fontSize: 15,

    },
    model: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    description: {
        fontSize: 14,
        marginBottom: 10
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    card2: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 20,
        width: '80%',
    },
    input: {
        backgroundColor: '#F3F3F3',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    buttonContainer2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        padding: 10,
        borderRadius: 5,
        width: '45%',
        alignItems: 'center',
    },
    updateButton: {
        backgroundColor: 'blue',
    },
    cancelButton: {
        backgroundColor: 'red',
    },
    buttonText: {
        color: '#FFFFFF',
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    alertContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    alertTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    alertMessage: {
        fontSize: 16,
        marginBottom: 20,
    },
    alertButton: {
        fontSize: 16,
        color: 'blue',
    },
});

export default HomeScreen;
