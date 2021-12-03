import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import styled from "styled-components/native";
import { COLORS } from '../../constants/styles.js';
import * as Google from 'expo-google-app-auth';
import { useNavigation } from '@react-navigation/native';
import { auth, SignInWithGoogle } from './firebase.js';
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
const LoginText = styled.Text`
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
const ForgotPasswordText = styled.Text`
    font-size: 16px;
    font-family: 'Ubuntu_400Regular';
    color: #ffffff;
    text-align: right;
    padding-top: 15px;
    width: 350px;
`;
const BoxSmall = styled.View`
    height: 30px;
`;
const BoxLarge = styled.View`
    height: 40px;
`;
const GoogleButton = styled.View`
    flex-direction: row;
    align-items: center;
    width: 350px;
    justify-content: space-between;
`;
const AlternativeLoginContainer = styled.View`
    flex-direction: row;
    align-items: center;
    width: 340px;
    justify-content: space-between;
`;
const Line = styled.View`
    flex: 1;
    height: 1px;
    background-color: #fff;
`;
const AlternativeLoginText = styled.Text`
    font-size: 16px;
    font-weight: normal;
    color: #ffffff;
    text-align: center;
`;

export default function loginScreenNew({ navigation }) {

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

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // const [passwordVisibility, setPasswordVisibility] = useState(true);
    // const [rightIcon, setRightIcon] = useState('eye');

    // const handlePasswordVisibility = () => {
    //     if (rightIcon === 'eye') {
    //       setRightIcon('eye-off');
    //       setPasswordVisibility(!passwordVisibility);
    //     } else if (rightIcon === 'eye-off') {
    //       setRightIcon('eye');
    //       setPasswordVisibility(!passwordVisibility);
    //     }
    //   };



    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                const uid = user.uid;
                console.log("signed in right now", user);
            }
        })
        return unsubscribe
    }, [])


    const handleLogin = () => {

        try {
            if (email !== '' && password !== '') {
                auth
                    .signInWithEmailAndPassword(email, password)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        console.log('Logged in with: ', user.email);
                        navigation.navigate('WelcomeBack');
                    })
                    .catch(error => {
                        switch (error.code) {
                            case 'auth/invalid-email':
                                Alert.alert('Invalid email. Please try again :)')
                                break;
                            case 'auth/user-not-found':
                                Alert.alert('There is no account with your provided data. Sign up to create a new account :)')
                                break;
                            case 'auth/wrong-password':
                                Alert.alert('Invalid password. Please try again :)')
                                break;
                        }
                    })
            }
        }
        catch (error) {
            console.log(error.code);
            alert("Error: ", error);
        }
    };


    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <Page>
                <ImageBackground source={require("../../assets/pickdest_bg.png")} resizeMode="cover" style={styles.image}>
                    <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }} >
                        <Image
                            style={styles.compassCardLogo}
                            source={require('../../assets/logoWhite.png')}
                        />
                        <LoginText>Login to your</LoginText>
                        <CompassPlusText>CompassPlus</CompassPlusText>
                        <BoxSmall />
                        <TextfieldContainer>
                            <TextInput
                                style={styles.input}
                                placeholder="Email ..."
                                keyboardType='email-address'
                                textContentType='emailAddress'
                                value={email}
                                onChangeText={text => setEmail(text)}

                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Password ..."
                                autoCapitalize='none'
                                secureTextEntry={true}
                                autoCorrect={false}
                                textContentType='password'
                                //rightIcon={rightIcon}
                                value={password}
                                onChangeText={text => setPassword(text)}
                            //handlePasswordVisibility= {handlePasswordVisibility}
                            />
                        </TextfieldContainer>
                        <TouchableOpacity onPress={() => { }}>
                            <ForgotPasswordText>Forgot Password?</ForgotPasswordText>
                        </TouchableOpacity>
                        <BoxSmall />
                        <TouchableOpacity style={styles.buttonOne} onPress={handleLogin}>
                            <Text style={styles.textOne}>LOGIN</Text>
                        </TouchableOpacity>
                        <BoxLarge />
                        <AlternativeLoginContainer>
                            <Line />
                            <AlternativeLoginText>  or login with   </AlternativeLoginText>
                            <Line />
                        </AlternativeLoginContainer>
                        <BoxSmall />
                        <TouchableOpacity style={styles.buttonTwo} onPress={() => SignInWithGoogle(navigation)}>
                            <GoogleButton>
                                <Image
                                    style={styles.googleLogo}
                                    source={require('../../assets/googleLogo.png')}
                                />
                                <Text style={styles.textTwo}>GOOGLE</Text>
                                <Text style={styles.textTwo}>           </Text>
                            </GoogleButton>
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
        height: windowHeight,
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
    buttonOne: {
        height: 55,
        width: 350,
        borderRadius: 8,
        backgroundColor: COLORS.SPACECADET,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textOne: {
        fontSize: 18,
        fontFamily: 'Ubuntu_700Bold',
        color: '#fff',
    },
    buttonTwo: {
        height: 55,
        width: 350,
        borderRadius: 8,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#009DDC',
        borderWidth: 2,
    },
    textTwo: {
        fontSize: 18,
        fontFamily: 'Ubuntu_700Bold',
        color: COLORS.CAROLINABLUE,
    },
    googleLogo: {
        width: 25,
        height: 25,
        marginLeft: 20,
    },
})
