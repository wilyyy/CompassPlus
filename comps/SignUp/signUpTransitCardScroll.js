import styled from "styled-components/native";
import React, {useState} from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { COLORS } from '../../constants/styles.js';
import SignUpTransitCard from "./signUpTransitCard.js";

const Container = styled.View`
    width: 333px;
    height: 325px;
    padding: 5px 10px 0px 10px;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 105, 164, 0.65);
    border-radius: 10px;
`;

const SignUpTransitCardScroll = () => {
    return <Container>
        <ScrollView style={styles.container}>
        <SignUpTransitCard icon="train" typeOfRideText="Train"/>
        <SignUpTransitCard icon="train" typeOfRideText="Train"/>
        <SignUpTransitCard />
        <SignUpTransitCard icon="boat" icon_type="ionicon" typeOfRideText="Seabus"/>
        <SignUpTransitCard icon="train" typeOfRideText="Train"/>
        <SignUpTransitCard icon="train" typeOfRideText="Train"/>
        <SignUpTransitCard />
        <SignUpTransitCard icon="boat" icon_type="ionicon" typeOfRideText="Seabus"/>
                
        </ScrollView>
    </Container>
}

export default SignUpTransitCardScroll;

const styles = StyleSheet.create({
    scrollView: {
        marginHorizontal: 20
    }    
});
