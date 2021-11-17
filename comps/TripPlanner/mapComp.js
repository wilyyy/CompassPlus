import styled from "styled-components/native";
import React, { useState } from 'react';
import { Dimensions, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import MapView from 'react-native-maps';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Container = styled.View`
    width: ${windowWidth};
    height: 70%;
`;

const MapComp = () => {
    return <Container>
        <MapView
            provider="google"
            initialRegion={{
                latitude: 49.246292,
                longitude: -123.116226,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            style={styles.map}
        />
    </Container>
}

export default MapComp;

const styles = StyleSheet.create({
    map: {
        width: windowWidth,
        height: windowHeight
    }

});