import React, {useState} from 'react';
import styled from "styled-components/native";
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


import { COLORS } from "../../constants/styles";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
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

const Container = styled.View`
    width: 300px;
    height: 368px;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
`;

const InnerCont =  styled.View`
    width: 251px;
    height: 294px;
    justify-content: space-between;
`;

const H1 = styled.Text`
    font-size: 24px;
    font-family: 'Ubuntu_400Regular';
`;

const H2 = styled.Text`
    font-size: 16px;
    font-family: 'Ubuntu_400Regular';
`;

const ButtonWBorder = styled.TouchableOpacity`
    width: 250px;
    height: 55px;
    border: 2px solid ${COLORS.CAROLINABLUE};
    justify-content: center;
    align-items: center;
    border-radius: 8px;
`;

const BlueButton = styled.TouchableOpacity`
    width: 250px;
    height: 55px;
    background-color: ${COLORS.CAROLINABLUE};
    justify-content: center;
    align-items: center;
    border-radius: 8px;
`;

const ButtonText = styled.Text`
    font-size: 28px;
    font-family: 'Ubuntu_700Bold';
`;

const Close = styled.TouchableOpacity`
    width: 41px;
    height: 41px;
    align-self: flex-end;
    position: absolute;
    right: 10px;
    top: 15px;
`;

const PickDestModal = ({
    navigation = useNavigation(),
    onLaterPress = () => {},
    onYesPress = () => {},
    onClosePress = () => {}
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
            <Close onPress={onClosePress}>
                <Icon 
                    name="closecircle" 
                    type='antdesign'
                    size={40}
                    color={COLORS.CAROLINABLUE}
                />
            </Close>
            <InnerCont>
                <H1>Ready to setup your account?</H1>
                <H2>This can be done later, or modified at anytime through the Trip Planner. </H2>
                <ButtonWBorder onPress={onLaterPress}>
                    <ButtonText style={styles.blue_text}>Later</ButtonText>
                </ButtonWBorder>
                <BlueButton onPress={onYesPress}>
                    <ButtonText style={styles.white_text}>Yes</ButtonText>
                </BlueButton>
            </InnerCont>
        </Container>
    }

}

export default PickDestModal;

const styles = StyleSheet.create({
    blue_text: {
        color: COLORS.CAROLINABLUE
    },
    white_text: {
        color: '#fff'
    }
});