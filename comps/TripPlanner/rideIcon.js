import styled from "styled-components/native";
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Icon } from 'react-native-elements';
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

import { COLORS } from "../../constants/styles";

const Container = styled.TouchableOpacity`
    width: 102px;
    height: 37px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0 10px;
`;

const DisplayIcon = styled.View`
    width: 73px;
    height: 73px;
    justify-content: center;
    align-items: center;
    border: 2px solid;
    border-color: ${props=>props.border};
    border-radius: 16px;
`;

const RideText = styled.Text`
    color: #fff;
    font-family: 'Ubuntu_700Bold';
    font-size: 16px;
    font-weight: 700;
    text-align: center;
`;

const RideIcon = ({
    ride_text= "019 Metrotown",
    icon = "bus",
    icon_type = "font-awesome-5",
    color = '#fff',
    border = "#fff"

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

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return <Container>
        <DisplayIcon border={border}>
            <Icon
                name={icon}
                type={icon_type}
                color={color}
                size={35}
            />
        </DisplayIcon>
        <RideText>{ride_text}</RideText>
    </Container>
    }
}

export default RideIcon;