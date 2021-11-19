import styled from "styled-components/native";
import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Ellipse from '../../assets/Ellipse_1.png';
import { useNavigation } from '@react-navigation/native';

import { COLORS } from "../../constants/styles";
import SavedRidesScroll from "./savedRidesScroll";

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

const TempCenter = styled.View`
    align-items: center;
`;


const Container = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 106px;
    background-color: ${COLORS.CAROLINABLUE};
    border-radius: 10px;
`;

const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 330px;
    height: 100px;
    border-radius: 10px;
`;

const TextCont = styled.View`
    width: 220px;
    justify-content: flex-start;
    align-items: flex-start;
`;

const H1 = styled.Text`
    font-size: 18px;
    font-family: 'Ubuntu_700Bold';
    line-height: 24px;
    letter-spacing: 0;
    color: #fff;
`;

const H2 = styled.Text`
    font-size: 16px;
    font-family: 'Ubuntu_400Regular';
    line-height: 24px;
    letter-spacing: 0;
    color: #fff;

`;

const HomeCard = ({
    // header = 'Saved Trips',
    // para = 'Access your saved trips for quicker route planning',
    img = { Ellipse },
    onCardPress = () => { },
    card_type = "savedRides",
    navigation = useNavigation(),

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

    const [typeOfCard, setTypeOfCard] = useState(card_type);
    const [savedRides, setSavedRides] = useState(false);

    const SeeSavedRides = () => {
        setSavedRides(true);
    }

    const MinimizeSavedRides = () => {
        setSavedRides(false);
    }


    if (typeOfCard === "savedRides") {
        if (savedRides === false) {
            if (!fontsLoaded) {
                return <AppLoading />;
            } else {
                return (
                    <TempCenter>
                        <Container onPress={SeeSavedRides}>
                            <Row>
                                <Image style={styles.image} source={img} />
                                <TextCont>
                                    <H1>Saved Trips</H1>
                                    <H2>Access your saved trips for quicker route planning</H2>
                                </TextCont>
                            </Row>
                        </Container>
                    </TempCenter>
                )
            }
        }

        if (savedRides === true) {
            if (!fontsLoaded) {
                return <AppLoading />;
            } else {
                return (
                    <TempCenter>
                        <SavedRidesScroll onMinimizePress={MinimizeSavedRides} />
                    </TempCenter>
                )
            }
        }
    }

    if (typeOfCard === "manageCard") {
        if (!fontsLoaded) {
            return <AppLoading />;
        } else {
            return (
                <TempCenter>
                    <Container onPress={() => navigation.navigate('MobileCard')}>
                        <Row>
                            <Image style={styles.image} source={img} />
                            <TextCont>
                                <H1>Manage your Card</H1>
                                <H2>Check your balance and top up wherever you are.</H2>
                            </TextCont>
                        </Row>
                    </Container>
                </TempCenter>
            )
        }
    }

}

export default HomeCard;

const styles = StyleSheet.create({
    image: {
        display: 'flex',
        margin: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
    }
});
