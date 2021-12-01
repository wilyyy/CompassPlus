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
    height: 80%;
    padding:2%;
    overflow:hidden;
    background-color: ${COLORS.CAROLINABLUE};
    border-radius: 15px;
`;

const Row = styled.View`
    flex-direction: row;
     /* border:2px solid blue; */
     justify-content: space-between;
     align-content: center;
     margin-bottom: 5%;
`;

const TextColumn = styled.View`
    justify-content: center;
    height: 60px;
    /* border:2px solid green; */

`;

const H1 = styled.Text`
    font-family: 'Ubuntu_700Bold';
    font-size: 22px;
    color: #fff;
`;
const H1Blue = styled.Text`
    font-family: 'Ubuntu_700Bold';
    font-size: 24px;
    color: #fff;
`;

const H2 = styled.Text`
    font-family: 'Ubuntu_400Regular';
    font-size: 16px;
    top: -5px;
    color: #fff;


`;

const ScrollCont = styled.View`
    width: ${windowWidth};
    height: 150px;
    justify-content: center;
    align-content: center;
    /* border:2px solid gold; */

`;

const Minimize = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    top:-1%;

   
`;
const Manage = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    top:-1%;
`;

const ViewAll = styled.TouchableOpacity`
    width: 100px;
    height: 30px;
    bottom: 10%;
    left: 65%;
`;

const SavedRidesScroll = ({
    onMinimizePress = () => { },
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
                <Minimize style={styles.toggleSideIcon}
                    onPress={onMinimizePress}>
                    <Icon
                        name="chevron-left"
                        type="evilicons"
                        color='#fff'
                        size={65}
                    // style={{ top: '-5%' }}
                    />
                </Minimize>
                <TextColumn>
                    <H1>Saved Locations</H1>
                    {/* <H2>Swipe through your locations</H2> */}
                </TextColumn>
                <Manage style={styles.toggleSideIcon}
                    onPress={() => navigation.navigate('SavedTrips')}>
                    <Icon
                        name="setting"
                        type="antdesign"
                        color={COLORS.SPACECADET}
                        size={20}
                        reverse={true}
                    // style={{ top: '-5%' }}
                    />
                </Manage>
            </Row>
            <ScrollCont style={{ width: '100%' }}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.scroll}

                >
                    <SavedRidesIcon icon_color="#fff" text_color='#fff' icon_type="train" ride_text="Waterfront to Yaletown" />
                    <SavedRidesIcon icon_color="#fff" text_color='#fff' icon_type="seabus" ride_text="Waterfront to Lonsdale Quay" />
                    <SavedRidesIcon icon_color="#fff" text_color='#fff' icon_type="bus" bus_text="05" ride_text="Dunsmuir to Cardero" />
                    <SavedRidesIcon icon_color="#fff" text_color='#fff' />
                    <SavedRidesIcon icon_color="#fff" text_color='#fff' icon_type="train" ride_text="Waterfront to Yaletown" />
                    <SavedRidesIcon icon_color="#fff" text_color='#fff' icon_type="seabus" ride_text="Waterfront to Lonsdale Quay" />
                    <SavedRidesIcon icon_color="#fff" text_color="#fff" icon_type="bus" bus_text="05" ride_text="Dunsmuir to Cardero" />
                    <SavedRidesIcon icon_color="#fff" text_color="#fff" />
                </ScrollView>
            </ScrollCont>
            {/* <ViewAll onPress={() => navigation.navigate('SavedTrips')}>
                <H1Blue>View All</H1Blue>
            </ViewAll> */}
        </Container>
    }
}

export default SavedRidesScroll;




const styles = StyleSheet.create({
    scroll: {
        paddingVertical: '8.5%',
        // paddingTop: '2%',
        backgroundColor: 'rgba(255,255,255,0.25)',
        borderRadius: 10,

    },
    toggleSideIcon: {

        shadowColor: COLORS.SPACECADET,
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 4 },
    },

});
