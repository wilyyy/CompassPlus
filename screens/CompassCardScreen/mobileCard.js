import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import styled from "styled-components/native";
import { View, TextInput, Dimensions, StyleSheet, Text, Pressable, TouchableOpacity } from 'react-native';


import { COLORS } from '../../constants/styles.js';

import MobileCard from '../../comps/CompassCardParent/cardManager.js';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Page = styled.View`
    width: ${windowWidth};
    height: ${windowHeight};
    background-color: ${COLORS.ALICEBLUE};
    align-items: center;
`;

const TopContainer = styled.View`
    position: relative;
    top: 15%;
    width: 90%;
    height: 50px;
    justify-content: space-between;
    flex-direction: row;

    /* border-width: 2px;
    border-color: lightgrey; */
`;

const Container = styled.View`
    position: relative;
    width: 90%;
    height: 85%;
    justify-content: space-evenly;
    align-items: center;
    margin-top:30px;
    flex-direction: row;

    /* border-width: 2px;
    border-color: lightgrey; */
`;

//make this add payment
const Payment = styled.Pressable`
    font-size: 16px;
    font-weight: 700;
    height:100%;
    align-self: flex-end;
    justify-content: center;

    /* border-width: 2px;
    border-color: red; */
`;

const H1 = styled.Text`
    font-size: 40px;
    color: ${COLORS.DAVYSGREY};
    align-self: flex-start;

    /* border-width: 2px;
    border-color: blue; */
`;

const H2 = styled.Text`
    font-size: 24px;
    
`;



const CompassCardScreen = () => {

    return (
        <Page>
            <TopContainer>
                <H1>My Cards</H1>
                <Payment>
                    <Text style={styles.payment}>Add Payment</Text>
                </Payment>
            </TopContainer>
            <Container>
                {/* <H1>Your Cards</H1> */}
                <MobileCard />
                <MobileCard />
                <MobileCard />


            </Container>
        </Page>
    )
}


export default CompassCardScreen;

const styles = StyleSheet.create({
    payment: {
        color: COLORS.DAVYSGREY,
        fontWeight: 'bold',
    },
    button_text: {
        fontWeight: 'bold',
        color: COLORS.CAROLINABLUE
    },
    text_down: {
        position: 'relative',
        top: 30
    },
    text_ridescreen: {
        position: 'relative',
        textAlign: 'center',
        fontStyle: 'italic'
    }
});