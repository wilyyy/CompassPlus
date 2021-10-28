import styled from "styled-components/native";
import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Pressable, Text } from "react-native";
import style from "../../storybook/stories/CenterView/style";

// still need to add icons to this

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
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 303px;
    height: 89px;
    background-color: #575759;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
`;

const RouteIconCont = styled.View`
    justify-content: center;
    align-items: center;
    width: 55px;
    height: 55px;
    background-color: #fff;
    border-radius: 15px;
`;

const RouteH1 = styled.Text`
    color: #575759;
    font-size: 24px;
    font-weight: bold;
`;

const RouteInfo = styled.View`
    height: 28px;
    width: 165px;
`;

const SignUpTransitCard = ({
    typeOfRideText = "Bus",
    routeIconText = "019",
    stopNameText = "Metrotown Stn",
    locationText = "Eastbound W Pender @ Nicola St"
}) => {
    return <SafeAreaView>
        <TransitCardCont>
            <Trapezoid>
                <Text style={styles.text}>{typeOfRideText}</Text>
            </Trapezoid>
            <TransitCard>
                <RouteIconCont>
                    <RouteH1>{routeIconText}</RouteH1>
                </RouteIconCont>
                <RouteInfo>
                    <RouteH1 style={styles.h1_white}>{stopNameText}</RouteH1>
                    <Text style={styles.text}>{locationText}</Text>
                </RouteInfo>
            </TransitCard>
        </TransitCardCont>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    text: {
        color: '#fff'
    },
    h1_white: {
        color: '#fff'
    }
});

export default SignUpTransitCard;
