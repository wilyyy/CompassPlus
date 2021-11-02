import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import styled from "styled-components/native";
import { View, Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { COLORS } from '../../constants/styles.js';

/*
4 state for confirm select : home, school, work, other
if corresponding checkbox selected = return appropriate screens
up to 4 screens
*/

const windowWidth = Dimensions.get('window').width;
console.log(windowWidth);
const windowHeight = Dimensions.get('window').height;

const Page = styled.View`
    width: ${windowWidth};
    height: ${windowHeight};
    background-color: ${COLORS.CAROLINABLUE}
    align-items: center;
    justify-content: center;
`;

const Container = styled.View`
    width: 90%;
    height: 700px;
    justify-content: space-between;
`

const PickDestinations = () => {
    return <Page>
        <Text>Skip</Text>
        <Container>
            <MaterialIcon 
            name="bus-side" 
            size={40}
            color="#fff"
            />
        </Container>
    </Page>
}

export default PickDestinations;

const styles = StyleSheet.create({
    text_bold: {
        color: '#fff',
        fontWeight: 'bold'
    },
    type_of_ride: {
        color: '#fff',
        fontWeight: 'bold',
        position: 'relative',
        right: 10
    },
    text_regular: {
        color: '#fff'
    }
});

