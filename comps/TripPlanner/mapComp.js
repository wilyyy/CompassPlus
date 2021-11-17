import styled from "styled-components/native";
import React, { useState } from 'react';
import { Dimensions, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import MapView from 'react-native-maps';

const windowWidth = Dimensions.get('window').width;

const Container = styled.View`
    width: ${windowWidth};
    height: 70%;
`;

const MapComp = () => {
    return <Container>
        <MapView
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        />
    </Container>
}

export default MapComp;