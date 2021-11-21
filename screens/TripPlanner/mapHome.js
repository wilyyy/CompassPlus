import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, Text, Pressable, TouchableOpacity, ImageBackground } from 'react-native';
import styled from "styled-components/native";
import MapView, { Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

//styles
import { COLORS } from '../../constants/styles.js';
import { MapStyleAub, MapStyleDefault, MapStyleDark } from '../../googlemaps/mapStyle.js';

import NavBar from '../../comps/NavBar/index.js';
import TripPlannerTab from '../../comps/TripPlanner/tripPlannerTab'
import MapComp from '../../comps/TripPlanner/mapComp';
// import MapSearchBar from '../../comps/TripPlanner/mapSearchBar.js';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Page = styled.View`
    width: ${windowWidth};
    height: ${windowHeight};
    background-color: ${COLORS.DAVYSGREY};
    align-items: center;
`;

const Container = styled.View`
    width: ${windowWidth}px;
    height: 217px;
    position: absolute;
    bottom: ${windowHeight / 15}px;
`;

const TopSearchBar = styled.View`
    width: 80%;
    position: absolute;
    top: 7%;
`;


//search bar
const MapHomeScreen = () => {
    const [region, setRegion] = useState({
        latitude: 49.246292,
        longitude: -123.116226,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })

    return <Page>
        <TopSearchBar>
            <GooglePlacesAutocomplete
                placeholder='Start Address'
                fetchDetails={true}
                GooglePlacesSearchQuery={{
                    rankby: "distance"
                }}
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                }}
                query={{
                    key: 'AIzaSyAf9zPTlsgPwAuzcHvBFAaSVvD28CCAM7U',
                    language: 'en',
                    components: "country:can",
                    // types: "transit_station"
                }}
            />
        </TopSearchBar>
        <MapView
            provider="google"
            initialRegion={{
                latitude: 49.246292,
                longitude: -123.116226,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            style={styles.map}
            customMapStyle={MapStyleDark}
        >
            <Marker
                coordinate={{
                    latitude: 49.246292,
                    longitude: -123.116226,
                }}
                pinColor={COLORS.CAROLINABLUE}
            />
        </MapView>
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
        height: windowHeight,
        position: 'absolute',
        zIndex: -2
    }

});