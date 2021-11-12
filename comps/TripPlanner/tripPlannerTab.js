import styled from "styled-components/native";
import React from 'react';
import { Tab, ThemeProvider } from 'react-native-elements';
import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import RideIcon from "./rideIcon";


//started, finish later

const Container = styled.View`
    width: 100%;
    height: 190px;
    flex-direction: column;
    align-items: center;
`;

const DisplayCard = styled.View`
    width: 100%;
    height: 142px;
    align-items: center;
    background-color: #009DDC;
`;

const TripPlannerTab = () => {

    return (
        <Container>
            <DisplayCard>
                <ScrollView style={styles.scrollview} horizontal={true}>
                <RideIcon />
                <RideIcon icon="train" ride_text="Broadway City Hall" />
                <RideIcon icon="boat" ride_text="Lonsdale Quay" icon_type="ionicon"/>
                <RideIcon />
                <RideIcon />
                <RideIcon />
                <RideIcon />
                <RideIcon />
                </ScrollView>
            </DisplayCard>
        </Container>
    );
}

export default TripPlannerTab;

const styles = StyleSheet.create({
    scrollview: {
        flexDirection: 'row',
        paddingTop: 15
    }
});