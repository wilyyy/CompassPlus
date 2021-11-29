import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import styled from "styled-components/native";
import { View, Modal, TextInput, Dimensions, StyleSheet, Text, Pressable, TouchableOpacity, ImageBackground } from 'react-native';
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
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import MapView, { Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { MapStyleAub } from '../../googlemaps/mapStyle.js';

import { COLORS } from '../../constants/styles.js';
import WhiteButton from '../../comps/Global/whiteButton.js';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Page = styled.View`
    width: ${windowWidth};
    height: ${windowHeight};
    background-color: ${COLORS.CAROLINABLUE};
    justify-content: center;
    align-items: center;
`;

const Container = styled.View`
    width: 90%;
    height: 800px;
    justify-content: space-evenly;
    align-items: center;
`;

const Button = styled.TouchableOpacity`
    width: 80px;
    height: 80px;
    top: 8%;
`;

const H1 = styled.Text`
    font-size: 38px;
    font-family: 'Ubuntu_400Regular';
    text-align: center;
    color: #fff;
`;

const MapContainer = styled.View`
    width: 333px;
    height: 325px;
    padding: 5px;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 105, 164, 0.65);
    border-radius: 10px;
`;

const SearchBar = styled.View`
    width: ${windowWidth / 1.25};
    position: absolute;
    top: 25%;
    z-index: 2;
`;

const Label = styled.TextInput`
    width: ${windowWidth / 1.25};
    height: 5.5%;
    padding-left: 10px;
    bottom: 5%;
    background-color: #fff;
    border-radius: 5px;
`;

const AddSavedLocation = ({
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

    const PressAddContinue = () => {
        navigation.navigate('SavedTrips');
    }

    //Map
    const [region, setRegion] = useState({
        latitude: 49.246292,
        longitude: -123.116226,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    const [markerDisplay, setMarkerDisplay] = useState(0);

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return <Page>
            <ImageBackground source={require("../../assets/pickdest_bg.png")} resizeMode="cover" style={styles.image}>
            {/* <Button onPress={PressBack}>
                <Icon
                    name="arrow-back-circle"
                    type="ionicon"
                    color='#fff'
                    size={70}
                />
            </Button> */}
                <Container>
                    <H1>Add A location</H1>
                    <Label
                        placeholder="Name for your location"
                    ></Label>
                    <SearchBar>
                        <GooglePlacesAutocomplete
                            placeholder='Search Address'
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
                    </SearchBar>
                    <MapContainer>
                        <MapView
                            provider="google"
                            initialRegion={{
                                latitude: 49.246292,
                                longitude: -123.116226,
                                latitudeDelta: 1,
                                longitudeDelta: 1,
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
                        </MapView>
                    </MapContainer>
                    <WhiteButton
                        text="Add Location"
                        onButtonPress={PressAddContinue}
                    />
                </Container>
            </ImageBackground>
        </Page>
    }
}

export default AddSavedLocation;

const styles = StyleSheet.create({
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth,
        height: '100%'
    },
    map: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: -2,
        borderRadius: 10
    }
});