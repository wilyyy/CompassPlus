import React from 'react';
import {Dimensions, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';
import styled from "styled-components/native";
import { COLORS } from '../../constants/styles.js';
import { useNavigation } from '@react-navigation/native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Page = styled.View`
    width: ${windowWidth};
    height: ${windowHeight};
    align-items: center;
`;
const Box = styled.View `
    height: 88%;
`;
const BoxSmall = styled.View `
    height: 20;
`;


export default function BenefitsScreen ({navigation}) {
    
    navigation = useNavigation()
    
    return (
        <Page>
            <ImageBackground source={require("../../assets/Benefits.png")} resizeMode="cover" style={styles.image}>
                <Box />
                <TouchableOpacity style={styles.buttonOne} onPress={() => navigation.navigate('Onboarding')}>
                    <Text style={styles.textOne}>LETS CHECK OUT THE APP</Text>
                </TouchableOpacity>
            </ImageBackground> 
        </Page>
    );
    }


const styles = StyleSheet.create({
    image: {
        alignItems: 'center',
        width: windowWidth,
        height: windowHeight
    },
    buttonOne: {
        height: 50,
        width: 350,
        borderRadius: 8,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textOne: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.CAROLINABLUE,
    },
})
