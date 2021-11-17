import styled from "styled-components/native";
import React from 'react';
import { Tab, ThemeProvider } from 'react-native-elements';
import { Dimensions, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from "../../constants/styles";

import RideIcon from "./rideIcon";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

//started, finish later

const Container = styled.View`
    width: ${windowWidth};
    height: 217px;
`;

const TabCont = styled.View`
    flex-direction: row;
    align-items: flex-end;
    height: 47px;
    width: 100%;
`;

const BigTab = styled.TouchableOpacity`
    width: 50%;
    height: 47px;
    background-color: ${COLORS.CAROLINABLUE};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

`;

const SmallTab = styled.TouchableOpacity`
    width: 50%;
    height: 40px;
    background-color: ${COLORS.SPACECADET};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

`;

const Display = styled.View`
    width: 100%;
    height: 142px;
    align-items: center;
    background-color: #009DDC;
`;

const TripPlannerTab = () => {

    return (
        <Container>
            <TabCont>
                <BigTab></BigTab>
                <SmallTab></SmallTab>
            </TabCont>
            <Display>
            </Display>
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