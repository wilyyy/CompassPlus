import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, Text, Pressable, TouchableOpacity, ImageBackground } from 'react-native';
import styled from "styled-components/native";
import NavBar from '../../comps/NavBar/index.js';

import { COLORS } from '../../constants/styles.js';
import TripPlannerTab from '../../comps/TripPlanner/tripPlannerTab'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Page = styled.View`
    width: ${windowWidth};
    height: ${windowHeight};
    background-color: ${COLORS.DAVYSGREY};
    align-items: center;
`;

const Container = styled.View`
    width: 100%;
    height: 90%;
`;

const Map = styled.View`
    width: 100%;
    height: 50%;
    justify-content: center;
    align-items: center;
`;

const MapHomeScreen = () => {
    return <Page>
        <Container>
            <Map>
                <Text>Map goes here</Text>
            </Map>
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
    }

});