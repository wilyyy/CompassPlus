import styled from "styled-components/native";
import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, TextInput, Pressable, Text } from "react-native";
import { Icon } from 'react-native-elements';
import { COLORS } from '../../constants/styles.js';
import { position } from "polished";

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

// Play with animations and make 
// it so it turns from grey to green but faded in over 0.5s
// after heart is clicked

const TransitCardCont = styled.View`
    width: 303px;
    height: 105px;
    margin-bottom: 25px;
`;

const Trapezoid = styled.View`
    flex-direction: row;
    width: 90px;
    height: 20px;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${props=>props.bgcolor};
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
`;

const TransitCard = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 303px;
    height: 89px;
    background-color: ${props=>props.bgcolor};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
`;

const RouteIconCont = styled.View`
    justify-content: center;
    align-items: center;
    width: 55px;
    height: 55px;
    background-color: #fff;
    border-radius: 15px;
`;

const RouteH1 = styled.Text`
    color: ${props=>props.h1color};
    font-size: 24px;
    font-weight: bold;
    font-family: 'Ubuntu_700Bold';
`;

const RouteInfo = styled.View`
    justify-content: space-evenly;
    height: auto;
    width: 165px;
`;

const SaveRouteButton = styled.Pressable`
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
`;

export default function SignUpTransitCard({
    typeOfRideText = "Bus",
    icon = "bus",
    icon_type = "font-awesome",
    routeIconText = "019",
    stopNameText = "Metrotown Stn",
    locationText = "Eastbound W Pender @ Nicola St"
}) {
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

    const [fillHeart, setFillHeart] = useState(false);
    const ToggleFillHeart = () => setFillHeart(previousState => !previousState);
    const [greenCard, setGreenCard] = useState(false);
    const ToggleGreenCard = () => setGreenCard (previousState => !previousState)
    
    const PressHeart = () => {
        ToggleFillHeart();
        ToggleGreenCard();
    }
    
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return <SafeAreaView>
            <TransitCardCont>
                <Trapezoid bgcolor={greenCard ? COLORS.LIMEGREEN : COLORS.SPACECADET}>
                    <Icon name={icon} type={icon_type} size={10} color="#fff" />
                    <Text style={styles.type_of_ride}>{typeOfRideText}</Text>
                </Trapezoid>
                <TransitCard bgcolor={greenCard ? COLORS.LIMEGREEN : COLORS.SPACECADET}>
                    <RouteIconCont>
                        <RouteH1 h1color={greenCard ? COLORS.LIMEGREEN : COLORS.SPACECADET}>{routeIconText}</RouteH1>
                    </RouteIconCont>
                    <RouteInfo>
                        <Text style={styles.text_bold}>{stopNameText}</Text>
                        <Text style={styles.text_regular}>{locationText}</Text>
                    </RouteInfo>
                    <SaveRouteButton onPress={PressHeart}>
                        <Icon name={fillHeart ? "heart" : "heart-o"} type="font-awesome" size={40} color="#fff" />
                    </SaveRouteButton>
                </TransitCard>
            </TransitCardCont>
        </SafeAreaView>
    }
}

const styles = StyleSheet.create({
    text_bold: {
        color: '#fff',
        fontFamily: 'Ubuntu_700Bold'
    },
    type_of_ride: {
        color: '#fff',
        fontFamily: 'Ubuntu_700Bold',
        marginRight: 5
    },
    text_regular: {
        color: '#fff',
        fontFamily: 'Ubuntu_400Regular'
    }
});
