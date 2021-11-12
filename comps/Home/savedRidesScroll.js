import styled from "styled-components/native";
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
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
import SavedRidesIcon from "./savedRidesIcon";

const Container = styled.View`
    width: 100%;
    height: 251px;
    justify-content: space-evenly;
`;

const H1 = styled.Text`
    font-family: 'Ubuntu_700Bold';
    font-size: 24px;
    color: ${COLORS.CAROLINABLUE};
`;

const H2 = styled.Text`
    font-family: 'Ubuntu_400Regular';
    font-size: 16px;
`;

const ScrollCont = styled.View`
    width: 100%;
    height: 150px;
`;

const SavedRidesScroll = () => {
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
            <H1>Saved Trips</H1>
            <H2>All of your favourite places</H2>
            <ScrollCont>
                <ScrollView horizontal={true}>
                    <SavedRidesIcon icon_type="train" ride_text="Waterfront to Yaletown"/>
                    <SavedRidesIcon icon_type="seabus" ride_text="Waterfront to Lonsdale Quay"/>
                    <SavedRidesIcon icon_type="bus" bus_text="05" ride_text="Dunsmuir to Cardero"/>
                    <SavedRidesIcon />
                    <SavedRidesIcon icon_type="train" ride_text="Waterfront to Yaletown"/>
                    <SavedRidesIcon icon_type="seabus" ride_text="Waterfront to Lonsdale Quay"/>
                    <SavedRidesIcon icon_type="bus" bus_text="05" ride_text="Dunsmuir to Cardero"/>
                    <SavedRidesIcon />
                </ScrollView>
            </ScrollCont>
        </Container>
    }
}

export default SavedRidesScroll;