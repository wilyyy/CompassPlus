import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import styled from "styled-components/native";
import { View, TextInput, Dimensions, StyleSheet, Text, Pressable, TouchableOpacity, ImageBackground } from 'react-native';
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
import { useNavigation } from '@react-navigation/native';


import { COLORS } from '../../constants/styles.js';
import SignUpCheckBox from '../../comps/SignUp/checkbox.js';
import SignUpTransitCard from '../../comps/SignUp/signUpTransitCard.js';
import BusProgressBar from '../../comps/SignUp/busProgressBar.js';
import SignUpInput from '../../comps/SignUp/signUpInput.js';
import SignUpTransitCardScroll from '../../comps/SignUp/signUpTransitCardScroll.js';
import WhiteButton from '../../comps/Global/whiteButton.js';

import { Video, AVPlaybackStatus } from 'expo-av';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Page = styled.View`
    width: ${windowWidth};
    height: ${windowHeight};
    background-color: ${COLORS.CAROLINABLUE};
    align-items: center;
`;

const TopContainer = styled.View`
    position: relative;
    top: 7%;
    width: 90%;
    height: 10%;
    justify-content: space-evenly;
`;

const Container = styled.View`
    position: relative;
    width: 90%;
    height: 85%;
    justify-content: space-evenly;
    align-items: center;
`;

const Skip = styled.Pressable`
    font-size: 16px;
    font-weight: 700;
    align-self: flex-end;
`;

const H1 = styled.Text`
    font-size: 38px;
    font-family: 'Ubuntu_400Regular';
    text-align: center;
    color: #fff;
`;

const H2 = styled.Text`
    font-size: 24px;
    font-family: 'Ubuntu_400Regular';
    color: #fff;
`;

const H3 = styled.Text`
    font-size: 18px;
    font-family: 'Ubuntu_400Regular_Italic';
    color: #fff;
    position: relative;
    text-align: center;
`;

// First Screen
const AllTheCheckboxes = styled.View`
    width: 120px;
    height: 200px;
    align-items: center;
    justify-content: space-between;
`;

const CheckboxCont = styled.View`
    flex-direction: row;
    width: 120px;
    align-items: center;
`;

const PickDestinations = ({
    navigation = useNavigation()
}) => {
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

    //changing heading and subheading
    const [heading, setHeading] = useState();
    const [subheading, setSubheading] = useState();

    //counter state that increments and changes page content 4 times
    const [pageCounter, setPageCounter] = useState(0);

    useEffect(()=>{
        //rules to change heading and subheading
        if (pageCounter === 0){
            setHeading("Where do you live?");
            setSubheading("Get home quick and safely! Here are some of the fastest ways home!");
        } else if (pageCounter === 1){
            setHeading("Where is school?");
            setSubheading("Don't be late to class! Catch the fastest rides to school below!");
        } else if (pageCounter === 2){
            setHeading("Where do you work?");
            setSubheading("Punch in to work on time! Catch these rides to help you get there faster!");
        } else if (pageCounter === 3){
            setHeading("Another place to go?");
            setSubheading("Time is money! Get there faster using these rides below!");
        }
        RouteToApp;
    }, [pageCounter]);

    const RouteToApp = () => {
        navigation.navigate('Home');
    }

    const IncrementCount = () => {
        if (pageCounter < 3){
            setPageCounter(prevState => prevState + 1);
          } else if (pageCounter === 3){
              RouteToApp();
          } else{
            setPageCounter(0);
          }
    }

    //Back Button
    const DecrementCount = () => {
        if (pageCounter > 0){
            setPageCounter(prevState => prevState - 1);
          } else{
            setPageCounter(3);
          }
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
            return <Page>
                <ImageBackground source={require("../../assets/pickdest_bg.png")} resizeMode="cover" style={styles.image}>
                    <TopContainer>
                        <Skip>
                            <Text style={styles.text_bold_white}>Skip</Text>
                        </Skip>
                        <BusProgressBar busPosition="0%" circlePosition="3%"/>
                    </TopContainer>
                    <Container>
                        <H1 style={styles.text_down}>{heading}</H1>
                        <SignUpInput />
                        {/* add props and maybe think about putting these 3 in a scroll view */}
                        <H3>{subheading}</H3>
                        <SignUpTransitCardScroll />
                        <WhiteButton 
                            text="Continue"
                            onButtonPress={IncrementCount}
                        />
                    </Container>
                </ImageBackground>
            </Page>
    }
    
}

export default PickDestinations;

const styles = StyleSheet.create({
    text_bold_white: {
        color: '#fff',
        fontWeight: 'bold'
    },
    button_text:{
        fontWeight: 'bold',
        color: COLORS.CAROLINABLUE,
        fontFamily: 'Ubuntu_700Bold'
    },
    text_down: {
        position: 'relative',
        top: 30
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth
    }
});