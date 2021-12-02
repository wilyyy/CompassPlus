import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
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
import { getAuth } from '@firebase/auth';


import { COLORS } from '../../constants/styles.js';
import WhiteButton from '../../comps/Global/whiteButton.js';
import axios from 'axios';

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
    height: 80%;
    justify-content: space-evenly;
    align-items: center;
    /* border:2px solid green; */
    padding:0;
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
    width: 100%;
    min-height: 325px;
    height:50%;
    padding: 5px;
    justify-content: center;
    align-items: center;
    z-index: -2;
    /* top:-5%; */
    background-color: rgba(0, 105, 164, 0.65);
    border-radius: 10px;
    /* border:2px solid blue; */
`;

const SearchBar = styled.View`
    width:100%;
    position: absolute;
    top: 50%;
    z-index: 2;
    
`;

const InputCont = styled.View`
    /* border:2px solid blue; */
    /* top:-7%; */
    width:100%;
    height:20%;
    margin-top: 10px;
    margin-bottom: 10px;
    align-items: center;
    /* justify-content: flex-start;
    align-content: center; */
`;

const Label = styled.TextInput`
    width: 100%;
    height: 50px;
    margin-bottom: 20px;
    margin-top: 10px;
    /* bottom: 5%; */
    /* top: -100%; */
    background-color: #fff;
    border-radius: 5px;
    padding-left: 9px;
    /* -webkit-box-sizing: border-box; 
    -moz-box-sizing: border-box;    
    box-sizing: border-box;          */
    /* border:2px solid yellow; */
`;

const AddSavedLocation = ({
    navigation = useNavigation()
}) => {

    //POST new card to savedTrips.js
    const ref = useRef();
    const [addLocation, setAddLocation] = useState("");
    const [cardName, setCardName] = useState("");
    const [buttonClick, setButtonClick] = useState(false);
    // const auth = getAuth();
    // const userId = auth.currentUser.uid;

    const AddCardToDb = async() =>{
        const associateAuth = getAuth();
        const fb_uid = associateAuth.currentUser.uid;
        const addressText = ref.current?.getAddressText();
        await axios.post('/saved_locations.php', {
            fb_uid: fb_uid,
            name: cardName,
            location: addressText
        });
        navigation.navigate('SavedTrips');
    };
    
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
        setButtonClick(true);
    }
    const PressBack = () => {
        navigation.goBack();
        console.log()
    }

    //Map
    const [region, setRegion] = useState({
        latitude: 49.246292,
        longitude: -123.116226,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    const [markerDisplay, setMarkerDisplay] = useState(0);



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


                <View style={{ flexDirection: 'row', width: '80%', alignContent: 'center', justifyContent: 'space-apart', left: '-1%' }}>
                    <TouchableOpacity
                        style={styles.back}
                        onPress={PressBack}
                    >
                        <Icon
                            name="chevron-left"
                            type="materialcommunityicons"
                            color='#fff'
                            size={50}
                        />
                    </TouchableOpacity>
                    <H1>Add A location</H1></View>

                <Container>
                    <InputCont>
                        <Label
                            placeholder="Name for your location"
                            value={cardName}
                            onChangeText={(text) => setCardName(text)}
                        />
                        <SearchBar>
                            <GooglePlacesAutocomplete
                                ref={ref}
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
                    </InputCont>


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
                        onButtonPress={AddCardToDb}
                    />
                </Container>
            </ImageBackground>
        </Page >
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