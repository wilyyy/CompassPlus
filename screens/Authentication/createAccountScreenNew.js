import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity, Text, Alert, KeyboardAvoidingView, ScrollView } from 'react-native';
import styled from "styled-components/native";
import { COLORS } from '../../constants/styles.js';
import { useNavigation } from '@react-navigation/native';
import { auth } from './firebase.js';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
    useFonts,
    Ubuntu_300Light,
    Ubuntu_300Light_Italic,
    Ubuntu_400Regular,
    Ubuntu_400Regular_Italic,
    Ubuntu_500Medium,
    Ubuntu_500Medium_Italic,
    Ubuntu_700Bold,
    Ubuntu_700Bold_Italic,
} from '@expo-google-fonts/ubuntu';
import AppLoading from 'expo-app-loading';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Page = styled.View`
    width: ${windowWidth};
    height: ${windowHeight};
    background-color: ${COLORS.ALICEBLUE};
    align-items: center;
`;
const WelcomeText = styled.Text`
    font-size: 38px;
    font-family: 'Ubuntu_400Regular';
    color: #ffffff;
    text-align: center;
    padding-top: 50px;
`;
const CompassPlusText = styled.Text`
    font-size: 48px;
    font-family: 'Ubuntu_700Bold';
    color: #ffffff;
    text-align: center;
`;
const TextfieldContainer = styled.View`
    padding-top: 20px;
    justify-content: space-between;
`;
const BoxSmall = styled.View`
    height: 30px;
`;
const BoxLarge = styled.View`
    height: 50px;
`;

export default function createAccountScreenNew({ navigation }) {
    navigation = useNavigation()

    let [fontsLoaded] = useFonts({
        Ubuntu_300Light,
        Ubuntu_300Light_Italic,
        Ubuntu_400Regular,
        Ubuntu_400Regular_Italic,
        Ubuntu_500Medium,
        Ubuntu_500Medium_Italic,
        Ubuntu_700Bold,
        Ubuntu_700Bold_Italic,
    });

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cardNumber, setCardNumber] = useState('')


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                const uid = user.uid;
                console.log("signed in right now", user);
            }
        })
        return unsubscribe
    }, [])


    const handleSignUp = () => {

        if (name == '' || email == '' || password == '') {
            Alert.alert("Please enter all relevant information: Name, Email, Password.");
        }
        else {
            auth
                .createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log('Registered with: ', user.email);
                    navigation.navigate('Benefits');
                })
                .catch(error => {
                    console.log(error.code);
                    switch (error.code) {
                        case 'auth/email-already-in-use':
                            Alert.alert('Email already in use !')
                            break;
                        case 'auth/weak-password':
                            Alert.alert('Pathword too weak. Please choose a password with 6 characters at least.')
                            break;
                        case 'auth/invalid-email':
                            Alert.alert('Invalid email. Please try again :)')
                            break;
                    }
                });
        }
    };

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {

        return (
            <Page>
                <ImageBackground source={require("../../assets/pickdest_bg.png")} resizeMode="cover" style={styles.image}>
                    <KeyboardAwareScrollView style={{ flex: 1 }} >
                        <Image
                            style={styles.compassCardLogo}
                            source={require('../../assets/logoWhite.png')}
                        />
                        <WelcomeText>Welcome to</WelcomeText>
                        <CompassPlusText>CompassPlus</CompassPlusText>
                        <BoxSmall />
                        <TextfieldContainer>
                            <TextInput
                                style={styles.input}
                                placeholder="Name ..."
                                value={name}
                                onChangeText={text => setName(text)}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Email ..."
                                value={email}
                                textContentType='emailAddress'
                                keyboardType='email-address'
                                onChangeText={text => setEmail(text)}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Password ..."
                                secureTextEntry={true}
                                autoCorrect={false}
                                value={password}
                                onChangeText={text => setPassword(text)}
                            />
                            {/* <TextInput
                                style={styles.input}
                                placeholder="Compass Card Number (optional) ..."
                                value={cardNumber}
                                onChangeText={text => setCardNumber(text)}
                            /> */}
                        </TextfieldContainer>
                        <BoxLarge />
                        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                            <Text style={styles.text}>CREATE ACCOUNT</Text>
                        </TouchableOpacity>
                    </KeyboardAwareScrollView>
                </ImageBackground>
            </Page>
        );
    }
}


const styles = StyleSheet.create({
    image: {
        alignItems: 'center',
        width: windowWidth,
        height: windowHeight
    },
    compassCardLogo: {
        width: 100,
        height: 100,
        marginTop: 70,
        alignSelf: 'center',
    },
    input: {
        height: 55,
        width: 350,
        borderWidth: 2,
        borderColor: '#009DDC',
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 10,
        marginTop: 15,
        fontSize: 18,
        alignSelf: 'center',
    },
    button: {
        height: 55,
        width: 350,
        borderRadius: 8,
        backgroundColor: COLORS.SPACECADET,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontFamily: 'Ubuntu_700Bold',
        color: '#fff',
    }
})
