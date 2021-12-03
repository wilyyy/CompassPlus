import React, { useState, useEffect, useRef } from 'react';
import { Dimensions, StyleSheet, Image, ImageBackground, Text, TouchableOpacity } from 'react-native';
import styled from "styled-components/native";
import { COLORS } from '../../constants/styles.js';
import LottieView from "lottie-react-native";
import { useNavigation } from '@react-navigation/native';
import HomeScreen from '../Home/home.js';
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
const WelcomeBackText = styled.Text`
    font-size: 38px;
    font-family: 'Ubuntu_400Regular';
    color: #ffffff;
    text-align: center;
    padding-top: 90px;
`;
const CompassPlusText = styled.Text`
    font-size: 48px;
    font-family: 'Ubuntu_700Bold';
    color: #ffffff;
    text-align: center;
`;
const BoxLarge = styled.View`
    height: 90px;
`;
const BoxMedium = styled.View`
    height: 70px;
`;
const BoxSmall = styled.View`
    height: 20;
`;


export default function authenticationScreen({ navigation }) {

    var anim = useRef();
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


    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <Page>
                <ImageBackground source={require("../../assets/pickdest_bg.png")} resizeMode="cover" style={styles.image}>
                    <BoxMedium />
                    <Image
                        style={styles.compassCardLogo}
                        source={require('../../assets/logoWhite.png')}
                    />
                    <WelcomeBackText>Welcome to</WelcomeBackText>
                    <CompassPlusText>CompassPlus</CompassPlusText>
                    <BoxLarge />
                    <TouchableOpacity style={styles.buttonOne} onPress={() => navigation.navigate('LoginNew')}>
                        <Text style={styles.textOne}>LOGIN</Text>
                    </TouchableOpacity>
                    <BoxSmall />
                    <TouchableOpacity style={styles.buttonTwo} onPress={() => navigation.navigate('CreateAccountNew')}>
                        <Text style={styles.textTwo}>CREATE ACCOUNT</Text>
                    </TouchableOpacity>
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
        width: 120,
        height: 120,
        marginTop: 70,
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
})
