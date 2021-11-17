import styled from "styled-components/native";
import React, { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

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
const windowWidth = Dimensions.get('window').width;


import { COLORS } from "../../constants/styles";
import SavedRidesIcon from "./savedRidesIcon";

const Container = styled.View`
    width: 100%;
    margin-left: 10%;
    height: 281px;
    justify-content: space-evenly;
`;

const Row = styled.View`
    flex-direction: row;
`;

const TextColumn = styled.View`
    justify-content: space-between;
    height: 60px;
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
    width: ${windowWidth};
    height: 150px;
`;

const Minimize = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    align-self: flex-end;
`;

const ViewAll = styled.TouchableOpacity`
    width: 100px;
    height: 30px;
    position: relative;
    bottom: 20px;
    left: 65%;
`;

const SavedRidesScroll = ({
    onMinimizePress = () => {},
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

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return <Container>
            <Row>
                <Minimize onPress={onMinimizePress}>
                    <Icon 
                        name="arrow-back-circle"
                        type="ionicon"
                        color={COLORS.CAROLINABLUE}
                        size={60}
                    />
                </Minimize>
                <TextColumn>
                    <H1>Saved Trips</H1>
                    <H2>All of your favourite places</H2>
                </TextColumn>
            </Row>
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
            <ViewAll onPress={() => navigation.navigate('SavedTrips')}>
                <H1>View All</H1>
            </ViewAll>
        </Container>
    }
}

export default SavedRidesScroll;