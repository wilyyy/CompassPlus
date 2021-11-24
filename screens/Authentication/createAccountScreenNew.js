import React, {useState} from 'react';
import {Dimensions, StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity, Text } from 'react-native';
import styled from "styled-components/native";
import { COLORS } from '../../constants/styles.js';
import { useNavigation } from '@react-navigation/native';
import { auth } from './firebase.js';
import KeyBoardAvoidingWrapper from '../../comps/Global/KeyboardAvoidingWrapper.js';

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
    font-weight: normal;
    color: #ffffff;
    text-align: center;
    padding-top: 50px;
`;
const CompassPlusText = styled.Text`
    font-size: 48px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
`;
const TextfieldContainer = styled.View`
    padding-top: 20px;
    justify-content: space-between;
`;
const BoxSmall = styled.View `
    height: 30px;
`;
const BoxLarge = styled.View `
    height: 50px;
`;

export default function createAccountScreenNew ({navigation}) {
    navigation = useNavigation()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cardNumber, setCardNumber] = useState('')

    const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log('Registered with: ', user.email);
              })
              .catch((error) => {
                alert(error.message)
              });
              navigation.navigate('Benefits');
    }

    return (
        // <KeyBoardAvoidingWrapper>
            <Page>
                <ImageBackground source={require("../../assets/pickdest_bg.png")} resizeMode="cover" style={styles.image}>
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
                        <TextInput
                            style={styles.input}
                            placeholder="Compass Card Number (optional) ..."
                            value={cardNumber}
                            onChangeText={text => setCardNumber(text)}
                        />
                    </TextfieldContainer>  
                    <BoxLarge />
                    <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                        <Text style={styles.text}>CREATE ACCOUNT</Text>
                    </TouchableOpacity>    
                </ImageBackground>
            </Page>
        // {/* </KeyBoardAvoidingWrapper> */}
    )
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
        fontWeight: 'bold',
        color: '#fff',
    }
})
