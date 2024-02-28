import { View, StyleSheet, Image, Modal, TouchableOpacity, Text } from 'react-native'
import React, { useState } from 'react'
import { NativeBaseProvider, Box, Switch, VStack, TextArea, Heading, Input, Icon, Pressable, HStack, Button } from "native-base";
import RegisterImage from '../assets/register.jpg'


const RegisterScreen = ({ navigation }) => {
    const [showAlert, setShowAlert] = useState(false);

    const handleRegister = () => {
        setShowAlert(true);

        // After a certain duration, hide the alert
        setTimeout(() => {
            setShowAlert(false);
            navigation.navigate('Home');
        }, 2000);
    };


    return (
        <NativeBaseProvider>
            <VStack style={style.container} space={5}>
                <Heading style={style.heading} size="xl" color="blue.500" bold>CREATE ACCOUNT</Heading>
                <Image style={{ marginBottom: '2%', width: '70%', height: '30%', resizeMode: 'cover' }} source={RegisterImage} />

                <Input mx="3" placeholder="Name" w="80%" />
                <Input mx="3" placeholder="Email" w="80%" />
                <Input type={false ? "text" : "password"} mx="3" placeholder="Password" w="80%" />
                {/* <Input mx="3" placeholder="Password" w="80%"/> */}

                <Button
                    style={style.btn}
                    title="Add Account"
                    onPress={handleRegister}
                > Create </Button>
                {/* Success Alert */}

                <Modal
                    visible={showAlert}
                    transparent
                    animationType="fade"
                    onRequestClose={() => setShowAlert(false)}
                >
                    <View style={style.modalContainer}>
                        <View style={style.alertContainer}>
                            <Text style={style.alertTitle}>Account Created</Text>
                            <Text style={style.alertMessage}>The account has been successfully created.</Text>
                            <TouchableOpacity onPress={() => setShowAlert(false)}>
                                <Text style={style.alertButton}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <HStack style={{ alignItems: 'center' }}>
                    <Text style={{ marginTop: '15%', }}>Have an account?</Text>
                    <Button
                        style={{ marginTop: '15%' }}
                        variant="link"

                        onPress={() => {
                            navigation.navigate('Login');
                        }}>
                        Login
                    </Button>
                </HStack>

            </VStack>
        </NativeBaseProvider>
    );
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: '10%',
        backgroundColor: 'white',
        flex: 1,
    },

    heading: {
        marginBottom: 30
    },

    btn: {
        backgroundColor: "#469AFF",

    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
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

export default RegisterScreen;