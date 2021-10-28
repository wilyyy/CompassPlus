import styled from "styled-components/native";
import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Pressable, Text } from "react-native";
import style from "../../storybook/stories/CenterView/style";

const TransitCardCont = styled.View`
    width: 303px;
    height: 105px;
`;

const Trapezoid = styled.View`
    width: 77px;
    height: 20px;
    background-color: #575759;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
`;

const TransitCard = styled.View`
    width: 303px;
    height: 89px;
    background-color: #575759;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
`;

const SignUpTransitCard = ({
    typeOfRideText = "Bus"
}) => {
    return <SafeAreaView>
        <TransitCardCont>
            <Trapezoid>
                <Text style={styles.text}>{typeOfRideText}</Text>
            </Trapezoid>
            <TransitCard></TransitCard>
        </TransitCardCont>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    text: {
        color: '#fff'
    }
});

export default SignUpTransitCard;
