import React, { useState, useEffect } from 'react';
import { View, Dimensions, StyleSheet, Text, Pressable, TouchableOpacity, ImageBackground } from 'react-native';
import styled from "styled-components/native";
import MapView, { Callout, Marker } from 'react-native-maps';
import { COLORS } from '../../constants/styles.js';

const Container = styled.View`
    width: 69px;
    height: 69px;
`;

const BusMapMarker = () =>{
    return <Container>
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
    </Container>
}