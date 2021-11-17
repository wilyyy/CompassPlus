import styled from "styled-components/native";
import React, { useState } from 'react';
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
    background-color: ${props=>props.bigtab_color};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    justify-content: center;
    align-items: center;
`;

const SmallTab = styled.TouchableOpacity`
    width: 50%;
    height: 40px;
    background-color: ${props=>props.smtab_color};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    justify-content: center;
    align-items: center;
`;

const TabText = styled.Text`
    font-size: 20px;
    color: #fff;
`;

const SmTabText = styled.Text`
    font-size: 16px;
    color: #fff;
`;

const Display = styled.View`
    width: 100%;
    height: 142px;
    align-items: center;
    background-color: ${props=>props.bg_color};
`;

const TripPlannerTab = ({
    carolinablue = COLORS.CAROLINABLUE,
    spacecadet = COLORS.SPACECADET
}) => {
    const [tabSwitch, setTabSwitch] = useState(false);

    const PressLeftTab = () => {
        setTabSwitch(false);
    }

    const PressRightTab = () => {
        setTabSwitch(true);
    }
    
    if(tabSwitch === false){
        return (
            <Container>
                <TabCont>
                    <BigTab bigtab_color={carolinablue} onPress={PressLeftTab}>
                        <TabText>Nearby Rides</TabText>
                    </BigTab>
                    <SmallTab smtab_color={spacecadet} onPress={PressRightTab}>
                        <SmTabText>Saved Rides</SmTabText>
                    </SmallTab>
                </TabCont>
                <Display bg_color={carolinablue}>
                    <TabText>Nearbu Rides</TabText>
                </Display>
            </Container>
        );
    }

    if(tabSwitch === true){
        return (
            <Container>
                <TabCont>
                    <SmallTab smtab_color={carolinablue} onPress={PressLeftTab}>
                        <SmTabText>Nearby Rides</SmTabText>
                    </SmallTab>
                    <BigTab bigtab_color={spacecadet} onPress={PressRightTab}>
                        <TabText>Saved Rides</TabText>
                    </BigTab>
                </TabCont>
                <Display bg_color={spacecadet}>
                    <TabText>Saved Rides</TabText>
                </Display>
            </Container>
        );
    }
}

export default TripPlannerTab;

const styles = StyleSheet.create({
    scrollview: {
        flexDirection: 'row',
        paddingTop: 15
    }
});