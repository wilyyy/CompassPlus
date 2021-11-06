import styled from "styled-components/native";
import React from 'react';
import { Tab, ThemeProvider } from 'react-native-elements';
import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


//started, finish later

const RideCardCont = styled.View`
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

const DisplayItemCont = styled.View`
    width: 102px;
    height: 37px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0 10px;
`;

const DisplayIcon = styled.View`
    width: 73px;
    height: 73px;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 16px;

`;

const RideText = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
`;

export default function TripPlannerTab() {

    return <ThemeProvider>
            <RideCardCont>
                <Tab>
                    <Tab.Item title="Nearby Rides" />
                    <Tab.Item title="Shared Rides" />
                </Tab>
                <DisplayCard>
                    <ScrollView style={styles.scrollview} horizontal={true}>
                        <DisplayItemCont>
                            <DisplayIcon>
                                <Icon name="bus" size={35} color="#23A6F0" />
                            </DisplayIcon>
                            <RideText>019</RideText>
                            <RideText>Metrotown</RideText>
                        </DisplayItemCont>
                        <DisplayItemCont>
                            <DisplayIcon>
                                <Icon name="bus" size={35} color="#23A6F0" />
                            </DisplayIcon>
                            <RideText>019</RideText>
                            <RideText>Metrotown</RideText>
                        </DisplayItemCont>
                        <DisplayItemCont>
                            <DisplayIcon>
                                <Icon name="bus" size={35} color="#23A6F0" />
                            </DisplayIcon>
                            <RideText>019</RideText>
                            <RideText>Metrotown</RideText>
                        </DisplayItemCont>
                        <DisplayItemCont>
                            <DisplayIcon>
                                <Icon name="bus" size={35} color="#23A6F0" />
                            </DisplayIcon>
                            <RideText>019</RideText>
                            <RideText>Metrotown</RideText>
                        </DisplayItemCont>
                        <DisplayItemCont>
                            <DisplayIcon>
                                <Icon name="bus" size={35} color="#23A6F0" />
                            </DisplayIcon>
                            <RideText>019</RideText>
                            <RideText>Metrotown</RideText>
                        </DisplayItemCont>
                    </ScrollView>
                </DisplayCard>
            </RideCardCont>
        </ThemeProvider>
}

const styles = StyleSheet.create({
    scrollview: {
        flexDirection: 'row',
        paddingTop: 15
    }
});