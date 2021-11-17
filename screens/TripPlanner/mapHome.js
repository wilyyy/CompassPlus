import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, Text, Pressable, TouchableOpacity, ImageBackground } from 'react-native';
import styled from "styled-components/native";
import MapView from 'react-native-maps';

import { COLORS } from '../../constants/styles.js';

import NavBar from '../../comps/NavBar/index.js';
import TripPlannerTab from '../../comps/TripPlanner/tripPlannerTab'
import MapComp from '../../comps/TripPlanner/mapComp';
import MapSearchBar from '../../comps/TripPlanner/mapSearchBar.js';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Page = styled.View`
    width: ${windowWidth};
    height: ${windowHeight};
    background-color: ${COLORS.DAVYSGREY};
    align-items: center;
`;

const Container = styled.View`
    width: ${windowWidth};
    height: 217px;
    position: relative;
    top: -10px;
`;

const SearchCont = styled.View`
    width: 330px;
    height: 40px;
    position: absolute;
    top: 0;
`;


const MapHomeScreen = () => {
    return <Page>
        <SearchCont>
            <MapSearchBar />
        </SearchCont>
        <MapComp />
        <Container>
            <TripPlannerTab />
        </Container>
        <View style={styles.NavCont}>
            <NavBar />
        </View>
    </Page>
}

export default MapHomeScreen;

const styles = StyleSheet.create({
    NavCont: {
        position: 'absolute',
        bottom: 0,
    },
    map: {
        width: windowWidth,
        height: windowHeight
    }

});