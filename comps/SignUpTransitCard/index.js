import styled from "styled-components/native";
import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Pressable, Text } from "react-native";
import style from "../../storybook/stories/CenterView/style";
import Icon from 'react-native-vector-icons/FontAwesome';

// still need to add icons to this

const TransitCardCont = styled.View`
    width: 303px;
    height: 105px;
`;

const Trapezoid = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 77px;
    height: 20px;
    background-color: #575759;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
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
    justify-content: space-evenly;
    height: auto;
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
                <Icon name="bus" size={10} color="#fff" />
                <Text style={styles.text_bold}>{typeOfRideText}</Text>
            </Trapezoid>
            <TransitCard>
                <RouteIconCont>
                    <RouteH1>{routeIconText}</RouteH1>
                </RouteIconCont>
                <RouteInfo>
                    <Text style={styles.text_bold}>{stopNameText}</Text>
                    <Text style={styles.text_regular}>{locationText}</Text>
                </RouteInfo>
                <Icon name="heart-o" size={30} color="#fff" />
                {/* Onpress
                <Icon name="heart" size={30} color="#fff" /> */}
            </TransitCard>
        </TransitCardCont>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    text_bold: {
        color: '#fff',
        fontWeight: 'bold'
    },
    text_regular: {
        color: '#fff'
    }
});

export default SignUpTransitCard;
