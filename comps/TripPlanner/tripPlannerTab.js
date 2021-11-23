import styled from "styled-components/native";
import React, { useState } from 'react';
import { Dimensions, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from "../../constants/styles";

import RideIcon from "./rideIcon";
import SavedRidesIcon from "../Home/savedRidesIcon";
import {
    useFonts,
    Ubuntu_300Light,
    Ubuntu_300Light_Italic,
    Ubuntu_400Regular,
    Ubuntu_400Regular_Italic,
    Ubuntu_500Medium,
    Ubuntu_500Medium_Italic,
    Ubuntu_700Bold,
    Ubuntu_700Bold_Italic,
} from '@expo-google-fonts/ubuntu';
import AppLoading from 'expo-app-loading';

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

const BigTab = styled.TouchableHighlight`
    width: 50%;
    height: 47px;
    background-color: ${props=>props.bigtab_color};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    justify-content: center;
    align-items: center;
`;

const SmallTab = styled.TouchableHighlight`
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
    color: ${props=>props.bigtab_text};
    font-family: 'Ubuntu_700Bold';
`;

const SmTabText = styled.Text`
    font-size: 16px;
    color: ${props=>props.smtab_text};
    font-family: 'Ubuntu_400Regular';
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
    let [fontsLoaded] = useFonts({
        Ubuntu_300Light,
        Ubuntu_300Light_Italic,
        Ubuntu_400Regular,
        Ubuntu_400Regular_Italic,
        Ubuntu_500Medium,
        Ubuntu_500Medium_Italic,
        Ubuntu_700Bold,
        Ubuntu_700Bold_Italic,
    });

    const [tabSwitch, setTabSwitch] = useState(false);

    const PressLeftTab = () => {
        setTabSwitch(false);
    }

    const PressRightTab = () => {
        setTabSwitch(true);
    }
    
    if(tabSwitch === false){
        if (!fontsLoaded) {
            return <AppLoading />;
        } else {
            return (
                <Container>
                    <TabCont>
                        <BigTab 
                            bigtab_color={carolinablue} 
                            onPress={PressLeftTab}
                            underlayColor={COLORS.CAROLINABLUE}
                        >
                            <TabText bigtab_text="#fff">Nearby Rides</TabText>
                        </BigTab>
                        <SmallTab 
                            smtab_color={spacecadet} 
                            onPress={PressRightTab}
                            underlayColor={COLORS.CAROLINABLUE}
                        >
                            <SmTabText smtab_text={carolinablue}>Saved Rides</SmTabText>
                        </SmallTab>
                    </TabCont>
                    <Display bg_color={carolinablue}>
                        <ScrollView 
                            horizontal={true}
                            contentContainerStyle={styles.contentContainer}
                        >
                            <SavedRidesIcon 
                                icon_color='#fff'
                                text_color='#fff'
                                ride_text="Lonsdale Quay"
                            />
                            <SavedRidesIcon
                                text_color='#fff'
                                icon_color='#fff'
                                icon_type="train" 
                                ride_text="Canada Line"
                            />
                            <SavedRidesIcon 
                                text_color='#fff'
                                icon_color='#fff'
                                icon_type="bus" 
                                bus_text="250" 
                                ride_text="Downtown"
                            />
                            <SavedRidesIcon 
                                text_color='#fff'
                                icon_color='#fff'
                                icon_type="bus" 
                                bus_text="05" 
                                ride_text="Robson"
                            />
                            <SavedRidesIcon 
                                text_color='#fff'
                                icon_color='#fff'
                                icon_type="seabus" 
                                ride_text="Waterfront to Lonsdale Quay"
                            />
                            <SavedRidesIcon 
                                text_color='#fff'
                                icon_color='#fff'
                                icon_type="bus" 
                                bus_text="05" 
                                ride_text="Dunsmuir to Cardero"
                            />
                        </ScrollView>
                    </Display>
                </Container>
            );
        }
    }

    if(tabSwitch === true){
        if (!fontsLoaded) {
            return <AppLoading />;
        } else {
            return (
                <Container>
                    <TabCont>
                        <SmallTab 
                            smtab_color={carolinablue} 
                            onPress={PressLeftTab}
                            underlayColor={COLORS.SPACECADET}
                        >
                            <SmTabText smtab_text="#fff">Nearby Rides</SmTabText>
                        </SmallTab>
                        <BigTab 
                            bigtab_color={spacecadet} 
                            onPress={PressRightTab}
                            underlayColor={COLORS.SPACECADET}
                        >
                            <TabText bigtab_text={COLORS.CAROLINABLUE}>Saved Rides</TabText>
                        </BigTab>
                    </TabCont>
                    <Display bg_color={spacecadet}>
                        <ScrollView 
                            horizontal={true}
                            contentContainerStyle={styles.contentContainerTwo}
                        >
                            <SavedRidesIcon 
                                text_color={COLORS.CAROLINABLUE}
                            />
                            <SavedRidesIcon
                                text_color={COLORS.CAROLINABLUE}
                                icon_type="train" 
                                ride_text="Waterfront to Yaletown"
                            />
                            <SavedRidesIcon 
                                text_color={COLORS.CAROLINABLUE}
                                icon_type="seabus" 
                                ride_text="Waterfront to Lonsdale Quay"
                            />
                            <SavedRidesIcon 
                                text_color={COLORS.CAROLINABLUE}
                                icon_type="bus" 
                                bus_text="05" 
                                ride_text="Dunsmuir to Cardero"
                            />
                            <SavedRidesIcon 
                                text_color={COLORS.CAROLINABLUE}
                                icon_type="seabus" 
                                ride_text="Waterfront to Lonsdale Quay"
                            />
                            <SavedRidesIcon 
                                text_color={COLORS.CAROLINABLUE}
                                icon_type="bus" 
                                bus_text="05" 
                                ride_text="Dunsmuir to Cardero"
                            />
                        </ScrollView>
                    </Display>
                </Container>
            );
        }
    }
}

export default TripPlannerTab;

const styles = StyleSheet.create({
    scrollview: {
        flexDirection: 'row',
        paddingTop: 15
    },
    contentContainer: {
        width: '100%',
        height: '100%',
        paddingTop: '3%',
        paddingLeft: '3%'
    },
    contentContainerTwo: {
        width: '100%',
        height: '100%',
        paddingTop: '3%',
        paddingLeft: '3%'
    }
});