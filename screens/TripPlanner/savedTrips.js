import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import styled from "styled-components/native";
import { Icon, Divider, Header } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import WhiteButton from '../../comps/Global/whiteButton.js';
import SavedTripsCard from '../../comps/TripPlanner/savedTripsCard.js';
import NavHome from '../../comps/NavBar/NavHome.js';

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
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Page = styled.View`
    width: ${windowWidth};
    height: ${windowHeight};
    justify-content: space-between;
    align-items: center;
    color: ${COLORS.ALICEBLUE};
`;

const TopBar = styled.View`
    width: 100%;
    height: 13%;
    background-color: ${COLORS.SPACECADET};
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding-top: 5%;
`;

const Content = styled.View`
    width: 100%;
    height: 87%;
    justify-content: space-between;
    align-items: center;
    padding-top: 10%;
`;

const H1 = styled.Text`
    font-size: 24px;
    color: #fff;
`;

const Button = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
`;

const BottomCont = styled.View`
    width: ${windowWidth};
    height: 162px;
    justify-content: space-between;
    align-items: center;
`;

const Para = styled.Text`
    font-size: 16px;
    color: ${COLORS.DAVYSGREY};
    width: 326px;
    height: 50px;
`;

const SavedTrips = ({
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
        return <Page>

            <Header
                leftComponent={{
                    icon: 'arrow-back',
                    color: 'white',
                    size: 30,
                    onPress: () => { navigation.goBack() },
                    iconStyle: { color: '#fff' }

                }}
                rightComponent={{
                    icon: 'add',
                    color: 'white',
                    size: 30,
                    onPress: () => { navigation.navigate('AddSavedLocation') },
                    iconStyle: { color: '#fff' }

                }}
                centerComponent={{
                    text: 'Saved Locations',
                    style: {
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 24
                    }
                }}
                containerStyle={{
                    backgroundColor: COLORS.SPACECADET,
                    height: 100,
                    borderBottomWidth: 0,
                }}
            />
            <Content>
                {/* put this in a scroll view? or aniamted gestures swipe right to view them? */}
                <SavedTripsCard />
                <SavedTripsCard />
                <SavedTripsCard />
                <BottomCont>
                    {/* <Divider orientation="vertical" width={5} />
                    <Para>Want to save more trips to your home, work, or school?</Para>
                    <WhiteButton
                        text="Pick Destinations"
                        bg_color={COLORS.CAROLINABLUE}
                        text_color="#fff"
                        onButtonPress={() => navigation.navigate('Onboarding')}
                    /> */}
                </BottomCont>
                <NavHome />
            </Content>
        </Page>
    }
}

export default SavedTrips;