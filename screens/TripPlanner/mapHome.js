import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, Text, Pressable, TouchableOpacity, ImageBackground } from 'react-native';
import styled from "styled-components/native";
import NavBar from '../../comps/NavBar/index.js';

import { COLORS } from '../../constants/styles.js';
import TripPlannerTab from '../../comps/TripPlanner/tripPlannerTab'
import MapComp from '../../comps/TripPlanner/mapComp';
import MapView from 'react-native-maps';


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
    justify-content: space-between;
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
                <MapView
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    style={styles.map}
                />
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
    },
    map: {
        width: windowWidth,
        height: windowHeight
    }

});