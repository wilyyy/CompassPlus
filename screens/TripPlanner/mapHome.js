import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, Dimensions, StyleSheet, Text, Pressable, TouchableOpacity, ImageBackground } from 'react-native';
import styled from "styled-components/native";
import MapView, { Callout, Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapViewDirections from 'react-native-maps-directions';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';



//styles
import { COLORS } from '../../constants/styles.js';
import { MapStyleAub, MapStyleDefault, MapStyleDark } from '../../googlemaps/mapStyle.js';

import NavMaps from '../../comps/NavBar/NavMaps.js';
import TripPlannerTab from '../../comps/TripPlanner/tripPlannerTab'
import MapComp from '../../comps/TripPlanner/mapComp';
import { NearbyBusMarkers } from '../../fakedata/nearbyBusMarkers.js';
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
    width: 75%;
    position: absolute;
    z-index: 3;
    top: 7%;
    left: 5%;
`;

const BotSearchBar = styled.View`
    width: 75%;
    position: absolute;
    top: 14%;
    z-index: 2;
    left: 5%;

`;

const MarkerCont = styled.View`
    display: ${props => props.marker_display};
`;

const BusMarker = styled.View``;


//search bar
const MapHomeScreen = () => {
    const [region, setRegion] = useState({
        latitude: 49.246292,
        longitude: -123.116226,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    const [endRegion, setEndRegion] = useState({
        latitude: 49.246292,
        longitude: -123.116226,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    const [markerDisplay, setMarkerDisplay] = useState(0);
    const [endMarkerDisplay, setEndMarkerDisplay] = useState(0);
    const [directionOpacity, setDirectionOpacity] = useState(0);

    const [busMarker, setBusMarker] = useState(NearbyBusMarkers);

    // useEffect(()=>{
    //     setMarkerDisplay(1);
    // }, [region, endRegion])

    navigation = useNavigation();


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
                    setRegion({
                        latitude: details.geometry.location.lat,
                        longitude: details.geometry.location.lng,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    });
                    setMarkerDisplay(1);
                }}
                query={{
                    key: 'AIzaSyAf9zPTlsgPwAuzcHvBFAaSVvD28CCAM7U',
                    language: 'en',
                    components: "country:can",
                    // types: "establishments",
                    radius: 40000,
                    location: `${region.latitude}, ${region.longitude}`
                }}
            />
        </TopSearchBar>
        <BotSearchBar>
            <GooglePlacesAutocomplete
                placeholder='End Address'
                fetchDetails={true}
                GooglePlacesSearchQuery={{
                    rankby: "distance"
                }}
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                    setEndRegion({
                        latitude: details.geometry.location.lat,
                        longitude: details.geometry.location.lng,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    });
                    setEndMarkerDisplay(1);
                    setDirectionOpacity(5);
                }}
                query={{
                    key: 'AIzaSyAf9zPTlsgPwAuzcHvBFAaSVvD28CCAM7U',
                    language: 'en',
                    components: "country:can",
                    // types: "transit_station"
                    radius: 40000,
                    location: `${endRegion.latitude}, ${endRegion.longitude}`

                }}
            />
        </BotSearchBar>
        <TouchableOpacity
            style={styles.manageButton}
            onPress={() => navigation.navigate('SavedTrips')}
        >
            <Icon
                name='setting'
                type='antdesign'
                color={COLORS.CAROLINABLUE}
                size={20}
                reverse={true}
            />
        </TouchableOpacity>
        <TouchableOpacity
            // onPress={() => navigation.navigate('')}
            onPress={() => console.log('the above needs to route to the single onboarding screen')}
            style={styles.saveButton}>
            <Icon
                name='heart'
                type='antdesign'
                color={COLORS.LIMEGREEN}
                size={20}
                reverse={true}
            />
        </TouchableOpacity>


        <MapView
            provider="google"
            initialRegion={{
                latitude: 49.248499,
                longitude: -123.001375,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            style={styles.map}
            customMapStyle={MapStyleAub}
        >
            <Marker
                coordinate={{
                    latitude: region.latitude,
                    longitude: region.longitude,
                }}
                pinColor={COLORS.CAROLINABLUE}
                opacity={markerDisplay}
            />
            <Marker
                coordinate={{
                    latitude: endRegion.latitude,
                    longitude: endRegion.longitude,
                }}
                pinColor={COLORS.LIMEGREEN}
                opacity={endMarkerDisplay}
            />
            {/* bus marker */}
            {
                busMarker.map((o, i)=>{
                    <BusMarker key={i}>
                        <Marker 
                            coordinate={{
                                latitude: o.latitude,
                                longitude: o.longitude
                            }}
                            image={require('../../assets/bus_marker.png')}
                        >
                            <Callout>
                                <View>
                                    <Text style={{
                                        color: COLORS.SPACECADET,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>{o.bus}</Text>
                                </View>
                            </Callout>
                        </Marker>
                    </BusMarker>
                })
            }
            

            <MapViewDirections
                origin={region}
                destination={endRegion}
                apikey='AIzaSyAf9zPTlsgPwAuzcHvBFAaSVvD28CCAM7U'
                strokeWidth={directionOpacity}
                strokeColor='#F06D23'
                mode='TRANSIT'
            />
        </MapView>
        <Container>
            <TripPlannerTab />
        </Container>
        <View style={styles.NavCont}>
            <NavMaps />
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
    },
    manageButton: {
        top: '6%',
        left: '40%'
    },
    saveButton: {
        top: '6.5%',
        left: '40%'
    },

});