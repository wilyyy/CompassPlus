import React, { useState, useEffect, useRef } from 'react';
import { Dimensions, StyleSheet, Image, ImageBackground, Text } from 'react-native';
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
    padding-top: 50px;
`;
const CompassPlusText = styled.Text`
    font-size: 48px;
    font-family: 'Ubuntu_700Bold';
    color: #ffffff;
    text-align: center;
`;
const LoginProcessText = styled.Text`
    font-size: 16px;
    font-family: 'Ubuntu_400Regular';
    color: #ffffff;
    text-align: center;
`;
const Box = styled.View`
    height: 50px;
`;


export default function welcomeBackScreen() {

    var anim = useRef();
    const [load, setLoad] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            //mock the server communication to take 3 seconds and then update the state to show the loaded UI
            setLoad(false)
        }, 6000)
    }, [])

    if (load === true) {
        return (
            <Page>
                <ImageBackground source={require("../../assets/pickdest_bg.png")} resizeMode="cover" style={styles.image}>
                    <Image
                        style={styles.compassCardLogo}
                        source={require('../../assets/logoWhite.png')}
                    />
                    <WelcomeBackText>Welcome back to</WelcomeBackText>
                    <CompassPlusText>CompassPlus</CompassPlusText>
                    <Box />
                    <LottieView
                        ref={(ref) => {
                            anim = ref;
                        }}
                        style={{
                            width: windowWidth,
                            height: 320,
                            backgroundColor: 'transparent',
                        }}
                        source={require('../../assets/Animations/DrivingBus.json')}
                        autoPlay={true}
                    />
                    <Box />
                    <LoginProcessText>We're logging you in...</LoginProcessText>
                    {/* Add loading dotts animation */}
                </ImageBackground>
            </Page>
        );
    }
    return (
        <HomeScreen />
    );
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

})
