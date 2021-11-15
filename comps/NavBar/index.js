import React from 'react';
import { View, Dimensions, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from "styled-components/native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';




const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const navBarTop = windowHeight;


const NavCont = styled.View`
    width: ${windowWidth}px;
    height:85px;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: #fff;
`;



export default function NavBar({
    // navigation = useNavigation(),
}) {

    return (
        <NavCont>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('MobileCard')}>
                <Text>Card</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Map')}>
                <Text>Map</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Account')}>
                <Text>Account</Text>
            </TouchableOpacity>
        </NavCont>
    );
}