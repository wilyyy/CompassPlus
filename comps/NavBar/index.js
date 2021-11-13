import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Dimensions, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from "styled-components/native";


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
    goHome = () => { },
    goCard = () => { },
    goMap = () => { },
    goAccount = () => { },
}) {

    return (
        <NavCont>
            <TouchableOpacity onPress={goHome}>
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={goCard}>
                <Text>Card</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={goMap}>
                <Text>Map</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={goAccount}>
                <Text>Account</Text>
            </TouchableOpacity>
        </NavCont>
    );
}