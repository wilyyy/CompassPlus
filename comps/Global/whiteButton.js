import styled from "styled-components/native";
import React, { useState }  from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

import { COLORS } from "../../constants/styles";
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

const ContinueButton = styled.TouchableOpacity`
    background-color: #fff;
    width: 244px;
    height: 58px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
`;

const H2 = styled.Text`
    font-size: 20px;
    font-family: 'Ubuntu_700Bold';
    color: ${COLORS.CAROLINABLUE};
`;

const WhiteButton = ({
    text = 'Continue',
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

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <ContinueButton onPress={onButtonPress}>
                <H2>{text}</H2>
            </ContinueButton>
        )
    }
}

export default WhiteButton;

