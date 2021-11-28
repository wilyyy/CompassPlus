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
    width: 102px;
    height: 120px;
    justify-content: space-evenly;
    align-items: center;
    margin-right: 15px;
`;

const RideText = styled.Text`
    color: ${props => props.text_color};
    font-family: 'Ubuntu_400Regular';
    font-size: 12px;
    text-align: center;
`;

const Container = styled.View`
    width: 90px;
    height: 90px;
    border-radius: 16px;
    border: 3px solid ${props => props.bordercolor};
    justify-content: center;
    align-items: center;
`;

const RideIcon = styled.View`
    width: 60px;
    height: 60px;
`;

const BusText = styled.Text`
    font-family: 'Ubuntu_500Medium';
    font-size: 40px;
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
                            size={60}
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
                            size={60}
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

