import styled from "styled-components/native";
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
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

const ContWithText = styled.TouchableOpacity`
    width: 100px;
    height: 90px;
    justify-content: space-evenly;
    align-items: center;
    margin-right: 5px;

`;

const RideText = styled.Text`
    color: ${props => props.text_color};
    font-family: 'Ubuntu_400Regular';
    font-size: 14px;
    text-align: center;
    margin-top:10%;
`;

const Container = styled.View`
    width: 70px;
    height: 70px;
    border-radius: 16px;
    margin:5px;
    border: 3px solid ${props => props.bordercolor};
    justify-content: center;
    align-items: center;
`;

const RideIcon = styled.View`
    width: 50px;
    height:50px;
    /* border:2px solid yellow; */
    top:5px;
`;

const BusText = styled.Text`
    font-family: 'Ubuntu_500Medium';
    font-size: 24px;
    color: ${props => props.bustextcolor};
`;

const SkytrainIcon = styled.Image`
    width:20px;
    height:20px;
`;

const SavedRidesIcon = ({
    icon_type = "seabus",
    icon_color = COLORS.CAROLINABLUE,
    bus_text = "250",
    ride_text = "Lonsdale Quay to Waterfront",
    text_color = COLORS.SPACECADET,
    onButtonPress = () => { },
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

    const [iconType, setIconType] = useState(icon_type);

    if (iconType === "train") {
        if (!fontsLoaded) {
            return <AppLoading />;
        } else {
            return <ContWithText onPress={onButtonPress}>
                <Container bordercolor={icon_color}>
                    <RideIcon>
                        <Icon
                            name="train"
                            type="font-awesome-5"
                            size={40}
                            color={icon_color}
                        />

                    </RideIcon>
                </Container>
                <RideText text_color={text_color}>{ride_text}</RideText>
            </ContWithText>
        }
    }

    if (iconType === "bus") {
        if (!fontsLoaded) {
            return <AppLoading />;
        } else {
            return <ContWithText onPress={onButtonPress}>
                <Container bordercolor={icon_color}>
                    <BusText bustextcolor={icon_color}>{bus_text}</BusText>
                </Container>
                <RideText text_color={text_color}>{ride_text}</RideText>
            </ContWithText>
        }
    }

    if (iconType === "seabus") {
        if (!fontsLoaded) {
            return <AppLoading />;
        } else {
            return <ContWithText onPress={onButtonPress}>
                <Container bordercolor={icon_color}>
                    <RideIcon>
                        <Icon
                            name="boat"
                            type="ionicon"
                            size={40}
                            color={icon_color}
                        />
                    </RideIcon>
                </Container>
                <RideText text_color={text_color}>{ride_text}</RideText>
            </ContWithText>
        }
    }
}

export default SavedRidesIcon;

