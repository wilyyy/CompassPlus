import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, Text, ScrollView } from 'react-native';
import styled from "styled-components/native";

import { COLORS } from '../../constants/styles.js';
import HomeCompassCard from '../../comps/Home/homeCompassCard.js';
import HomeCard from '../../comps/Home/homeCard.js';
import WelcomeMessage from '../../comps/Home/welcomeMessage.js';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Page = styled.View`
    width: ${windowWidth};
    height: ${windowHeight};
    justify-content: space-between;
    align-items: center;
    color: #fff;
`;

//switch to gesture handler?
const BottomContainer = styled.View`
    width: ${windowWidth};
    align-items: center;
    height: 60%;
`;

const HomeElement = styled.View`
    margin: 10px 0;
`;

const HomeScreen = () => {
    return <Page>
        <HomeCompassCard />
        <BottomContainer>
            <ScrollView style={styles.scroll_cont}>
                <HomeElement>
                    <WelcomeMessage />
                </HomeElement>
                <HomeElement><HomeCard /></HomeElement>
                <HomeElement><HomeCard /></HomeElement>
                <HomeElement><HomeCard /></HomeElement>
                <HomeElement><HomeCard /></HomeElement>
                <HomeElement><HomeCard /></HomeElement>
                <HomeElement><HomeCard /></HomeElement>
            </ScrollView>
        </BottomContainer>
    </Page>
}

export default HomeScreen;

const styles = StyleSheet.create({
    scroll_cont: {
        width: windowWidth,
    }

});