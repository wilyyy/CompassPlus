import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import styled from "styled-components/native";
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

import { COLORS } from '../../constants/styles.js';
import { toColorString } from 'polished';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Container = styled.TouchableOpacity`
    width: 340px;
    height: 106px;
    background-color: ${COLORS.CAROLINABLUE};
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(37, 43, 66, 0.5);
`;

const Row = styled.View`
    flex-direction: row;
    width: 313px;
    height: 54px;
    justify-content: space-between;
    align-items: center;
`;

const TransitIcon = styled.View`
    width: 27px;
    height: 27px;
    justify-content: center;
    align-items: center;
    background-color: ${COLORS.SPACECADET};
    border-radius: 100px;
`;

const Column = styled.View`
    height: 54px;
    width: 236px;
    justify-content: space-between;
`;

const TextRow = styled.View`
    width: auto;
    height: 24px;
    flex-direction: row;
`;

const Para = styled.Text`
    font-size: 15px;
    font-family: 'Ubuntu_400Regular';
    color: #fff;
`;

const SeeMoreIcon = styled.TouchableOpacity`
    width: 35px;
    height: 35px;
    background-color: #fff;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
`;

const SavedTripsCard = ({
    icon_name="bus",
    icon_type="font-awesome-5",
    from="Willingon Ave @ Sanderson Way",
    to="Nanaimo Station @ Bay 2",
    onButtonPress = () => {}
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
        return <Container onPress={onButtonPress}>
        <Row>
            <TransitIcon>
                <Icon
                    name={icon_name}
                    type={icon_type}
                    color='#fff'
                    size={15}
                />
            </TransitIcon>
            <Column>
                <TextRow>
                    <Icon
                        name="ios-location-sharp"
                        type="ionicon"
                        color={COLORS.LIGHTGREY}
                        size={15}
                    />
                    <Para>{from}</Para>
                </TextRow>
                <TextRow>
                    <Icon
                        name="ios-location-sharp"
                        type="ionicon"
                        color={COLORS.DAVYSGREY}
                        size={15}
                    />
                    <Para>{to}</Para>
                </TextRow>
            </Column>
            <SeeMoreIcon onPress={onButtonPress}>
                <Icon
                    name="arrowright"
                    type="antdesign"
                    color= {COLORS.DAVYSGREY}
                    size={25}
                />
            </SeeMoreIcon>
        </Row>
    </Container>
    }
}

export default SavedTripsCard;