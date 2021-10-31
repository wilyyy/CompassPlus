import styled from "styled-components/native";
import React from 'react';
import { Tab, ThemeProvider } from 'react-native-elements';

//started, finish later

const RideCardCont = styled.View`
    width: 100%;
    height: 142px;
    flex-direction: column;
`;

const DisplayCard = styled.View`
    width: 100%;
    height: 142px;
    background-color: #009DDC;
`;

export default function TripPlannerTab() {

    return <ThemeProvider>
            <RideCardCont>
                <Tab>
                    <Tab.Item title="Nearby Rides" />
                    <Tab.Item title="Shared Rides" />
                </Tab>
                <DisplayCard />
            </RideCardCont>
        </ThemeProvider>
}